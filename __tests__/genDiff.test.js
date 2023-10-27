/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import genDiff from '../index.js';
import { getPathToFixtures, getPathToSrc } from '../src/utilites/getPathToFile.js';

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
  const pathToFixtures = '/Users/dmitrij/projects/frontend-project-46/__fixtures__/testFile1.json';
  const pathToSrc = '/Users/dmitrij/projects/frontend-project-46/src/file1.json';
  expect(getPathToFixtures('testFile1.json')).toBe(pathToFixtures);
  expect(getPathToSrc('file1.json')).toBe(pathToSrc);
});
