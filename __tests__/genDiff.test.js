/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';
import { getPathToFixtures, getPathToSrc } from '../src/utilites/getPathToFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToJsonFile1 = getPathToFixtures('testFile1.json');
const pathToJsonFile2 = getPathToFixtures('testFile2.json');
const pathToYmlFile1 = getPathToFixtures('testFile3.yaml');
const pathToYmlFile2 = getPathToFixtures('testFile4.yml');
const json = {
  common: {
    '+ follow': false,
    setting1: 'Value 1',
    '- setting2': 200,
    '- setting3': true,
    '+ setting3': null,
    '+ setting4': 'blah blah',
    '+ setting5': {
      key5: 'value5',
    },
    setting6: {
      doge: {
        '- wow': '',
        '+ wow': 'so much',
      },
      key: 'value',
      '+ ops': 'vops',
    },
  },
  group1: {
    '- baz': 'bas',
    '+ baz': 'bars',
    foo: 'bar',
    '- nest': {
      key: 'value',
    },
    '+ nest': 'str',
  },
  '- group2': {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
  '+ group3': {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};

test('getPathTofile.js', () => {
  const pathToFixtures = path.join(__dirname, '..', '__fixtures__', 'testFile1.json');
  const pathToSrc = path.join(__dirname, '..', 'src', 'file1.json');
  expect(getPathToFixtures('testFile1.json')).toBe(pathToFixtures);
  expect(getPathToSrc('file1.json')).toBe(pathToSrc);
});

test('is correct output stylish format', () => {
  const expectedStylishFormat = JSON.stringify(json, null, ' ').replaceAll('"', '').replaceAll(',', '');
  expect(genDiff(pathToJsonFile1, pathToJsonFile2)).toBe(expectedStylishFormat);
  expect(genDiff(pathToYmlFile1, pathToJsonFile2)).toBe(expectedStylishFormat);
});

test('unknown format type', () => {
  const nonExistantFormat = genDiff(pathToJsonFile1, pathToJsonFile2, 'blabla');
  expect(nonExistantFormat).toThrow(Error);
});

const expectedPlainFormat = [
  'Property \'common.follow\' was added with value: false',
  'Property \'common.setting2\' was removed',
  'Property \'common.setting3\' was updated. From true to null',
  'Property \'common.setting4\' was added with value: \'blah blah\'',
  'Property \'common.setting5\' was added with value: [complex value]',
  'Property \'common.setting6.doge.wow\' was updated. From \'\' to \'so much\'',
  'Property \'common.setting6.ops\' was added with value: \'vops\'',
  'Property \'group1.baz\' was updated. From \'bas\' to \'bars\'',
  'Property \'group1.nest\' was updated. From [complex value] to \'str\'',
  'Property \'group2\' was removed',
  'Property \'group3\' was added with value: [complex value]',
];

test('is correct output plain format', () => {
  expect(genDiff(pathToJsonFile1, pathToJsonFile2, 'plain')).toBe(expectedPlainFormat.join('\n'));
  expect(genDiff(pathToYmlFile2, pathToJsonFile2, 'plain')).toBe(expectedPlainFormat.join('\n'));
});

test('is correct ouput JSON format', () => {
  expect(genDiff(pathToJsonFile1, pathToJsonFile2, 'json')).toStrictEqual(json);
});
