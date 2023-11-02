/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import readFile from './utilites/readFile.js';
import stylish from './utilites/stylish.js';

const genDiff = (filepath1, filepath2, formatter = 'stylish') => {
  const contentFile1 = readFile(filepath1);
  const contentFile2 = readFile(filepath2);
  const iter = (obj1, obj2) => {
    const obj = {};
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys = _.uniq([...keys1, ...keys2]);
    keys.map((key) => {
      const remove = `- ${key}`;
      const add = `+ ${key}`;
      if (!keys2.includes(key)) {
        obj[remove] = obj1[key];
      }
      if (!keys1.includes(key)) {
        obj[add] = obj2[key];
      }
      if (keys2.includes(key) && keys1.includes(key)) {
        if (!_.isObject(obj2[key])) {
          if (obj1[key] !== obj2[key]) {
            obj[remove] = obj1[key];
            obj[add] = obj2[key];
          } else {
            obj[key] = obj2[key];
          }
        } else obj[key] = iter(obj1[key], obj2[key]);
      }
      return obj;
    });
    return { ...obj };
  };
  switch (formatter) {
    case 'stylish':
      return stylish(iter(contentFile1, contentFile2));
    default:
      throw new Error('Неправильно выбран формат');
  }
};
export default genDiff;
