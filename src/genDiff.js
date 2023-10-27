/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import readFile from './utilites/readFile.js';

const obj = {};

const genDiff = (file1, file2) => {
  const contentFile1 = readFile(file1);
  const contentFile2 = readFile(file2);
  const keys1 = Object.keys(contentFile1);
  const keys2 = Object.keys(contentFile2);
  const keys = _.uniq([...keys1, ...keys2]).sort();
  keys.map((element) => {
    const remove = `- ${element}`;
    const add = `+ ${element}`;
    if (!keys2.includes(element)) {
      obj[remove] = contentFile1[element];
    }
    if (keys2.includes(element) && keys1.includes(element)) {
      if (contentFile1[element] !== contentFile2[element]) {
        obj[remove] = contentFile1[element];
        obj[add] = contentFile2[element];
      } else {
        obj[element] = contentFile2[element];
      }
    }
    if (!keys1.includes(element)) {
      obj[add] = contentFile2[element];
    }
  });
  const clearString = JSON.stringify(obj, null, ' ').replaceAll('"', '').replaceAll(',', '');
  return clearString;
};

export default genDiff;
