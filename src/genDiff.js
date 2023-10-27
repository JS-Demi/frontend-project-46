/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import readFile from './utilites/readFile.js';
import { getPathToFixtures } from './utilites/getPathToFile.js';

const genDiff = (filepath1, filepath2) => {
  const obj = {};
  const contentFile1 = readFile(filepath1);
  const contentFile2 = readFile(filepath2);
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
      } else obj[element] = contentFile2[element];
    }
    if (!keys1.includes(element)) {
      obj[add] = contentFile2[element];
    }
    return obj;
  });
  return JSON.stringify(obj, null, ' ').replaceAll('"', '').replaceAll(',', '');
};
const fle1 = getPathToFixtures('testFile1.json');
const fle2 = getPathToFixtures('testFile2.json');
console.log(genDiff(fle1, fle2));
export default genDiff;
