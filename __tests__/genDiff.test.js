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
  "- age": 27,
  "+ age": "unknown",
  city: "Moscow",
  '+ developer': true,
  "- name": "Dmitry",
  "+ name": "Irene",
  "- qualification": "rescuer",
  "- work": "MES",
  "+ work": "Hexlet",
};

const string = JSON.stringify(diff, null, ' ').replaceAll('"', '').replaceAll(',', '');

test('genDiff.js', () => {
  const filepath1 = getPathToFixtures('testFile1.json');
  const filepath2 = getPathToFixtures('testFile2.json');
  const differ = genDiff(filepath1, filepath2);
  expect(differ).toBe(string);
});

test('getPathTofile.js', () => {
  const pathToFixtures = path.join(__dirname, '..', '__fixtures__', 'testFile1.json');
  const pathToSrc = path.join(__dirname, '..', 'src', 'file1.json');
  expect(getPathToFixtures('testFile1.json')).toBe(pathToFixtures);
  expect(getPathToSrc('file1.json')).toBe(pathToSrc);
});
