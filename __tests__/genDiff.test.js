/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';
import { getPathToFixtures, getPathToSrc } from '../src/utilites/getPathToFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const diff = {
  common: {
    "+ follow": false,
    setting1: "Value 1",
    "- setting2": 200,
    "- setting3": true,
    '+ setting3': null,
    '+ setting4': "blah blah",
    '+ setting5': {
      key5: 'value5',
    },
    setting6: {
      doge: {
        "- wow": "",
        "+ wow": "so much",
      },
      key: "value",
      "+ ops": "vops",
    },
  },
  group1: {
    "- baz": "bas",
    "+ baz": "bars",
    foo: "bar",
    "- nest": {
      key: "value",
    },
    "+ nest": "str",
  },
  "- group2": {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
  "+ group3": {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};

const result = JSON.stringify(diff, null, ' ').replaceAll('"', '').replaceAll(',', '');

test('genDiff.js', () => {
  const filepath1 = getPathToFixtures('testFile1.json');
  const filepath2 = getPathToFixtures('testFile2.json');
  const difference = genDiff(filepath1, filepath2);
  expect(difference).toBe(result);
});

test('getPathTofile.js', () => {
  const pathToFixtures = path.join(__dirname, '..', '__fixtures__', 'testFile1.json');
  const pathToSrc = path.join(__dirname, '..', 'src', 'file1.json');
  expect(getPathToFixtures('testFile1.json')).toBe(pathToFixtures);
  expect(getPathToSrc('file1.json')).toBe(pathToSrc);
});

test('genDiff.js yaml files', () => {
  const filepath1 = getPathToFixtures('testFile3.yaml');
  const filepath2 = getPathToFixtures('testFile2.json');
  const filepath3 = getPathToFixtures('testFile4.yml');
  const checkDifference1 = genDiff(filepath1, filepath2);
  const checkDifference2 = genDiff(filepath3, filepath2);
  expect(checkDifference1).toBe(result);
  expect(checkDifference2).toBe(result);
});

// test('unknwon format genDiff.js', () => {
//   const filepath1 = getPathToFixtures('testFile1.json');
//   const filepath2 = getPathToFixtures('testFile2.json');
//   const difference = genDiff(filepath1, filepath2, 'json');
//   expect(difference).toThrow('Неправильно выбран формат');
// });
