/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import parse from './utilites/parsers.js';
import readFile from './utilites/readFile.js';
import selectedFormat from './formatters/index.js';

function makeTree(oldObj, newObj) {
  const keys = _.sortBy(Object.keys({ ...oldObj, ...newObj }), (key) => key);
  const tree = keys.map((key) => {
    const oldValue = oldObj[key];
    const newValue = newObj[key];
    if (_.has(newObj, key) && !_.has(oldObj, key)) {
      return { key, type: 'created', value: newValue };
    }
    if (!_.has(newObj, key) && _.has(oldObj, key)) {
      return { key, type: 'removed', value: oldValue };
    }
    if (_.has(newObj, key) && _.has(oldObj, key)) {
      if (oldValue === newValue) {
        return { key, type: 'unchanged', value: oldValue };
      }
      if (_.isObject(oldValue) && _.isObject(newValue)) {
        return { key, type: 'nested', children: makeTree(oldValue, newValue) };
      }
    }
    const updated = {
      key, type: 'updated', oldValue, newValue,
    };
    return updated;
  });
  return tree;
}

function genDiff(file1, file2, format = 'stylish') {
  const contentFile1 = readFile(file1);
  const contentFile2 = readFile(file2);
  const parsedFile1 = parse(file1, contentFile1);
  const parsedFile2 = parse(file2, contentFile2);
  const differenceTree = makeTree(parsedFile1, parsedFile2);
  const result = selectedFormat(differenceTree, format);
  return result;
}
export default genDiff;
