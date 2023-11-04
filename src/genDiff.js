/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import readFile from './utilites/readFile.js';
import { stylishFormat, plainFormat, jsonFormat } from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatter = 'stylish') => {
  const contentFile1 = readFile(filepath1);
  const contentFile2 = readFile(filepath2);
  const iter = (file1, file2) => {
    const result = {};
    const keys1 = Object.keys(file1);
    const keys2 = Object.keys(file2);
    const keys = _.uniq([...keys1, ...keys2]);
    _.sortBy(keys, (value) => value)
      .map((key) => {
        const remove = `- ${key}`;
        const add = `+ ${key}`;
        if (!keys2.includes(key)) {
          result[remove] = file1[key];
        }
        if (!keys1.includes(key)) {
          result[add] = file2[key];
        }
        if (keys2.includes(key) && keys1.includes(key)) {
          if (!_.isObject(file2[key])) {
            if (file1[key] !== file2[key]) {
              result[`-${remove}`] = file1[key];
              result[`+${add}`] = file2[key];
            } else {
              result[key] = file2[key];
            }
          } else result[key] = iter(file1[key], file2[key]);
        }
        return result;
      });
    return { ...result };
  };
  switch (formatter) {
    case 'stylish':
      return stylishFormat(iter(contentFile1, contentFile2));
    case 'plain':
      return plainFormat(iter(contentFile1, contentFile2));
    case 'json':
      return jsonFormat(iter(contentFile1, contentFile2));
    default:
      throw new Error('Unknown format type');
  }
};
export default genDiff;
