/* eslint-disable no-undef */
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';
import getFixturesPath from '../src/getFixturesPath.js';
import readFile from '../src/utilites/readFile.js';
import parse from '../src/utilites/parsers.js';
import buildPlainFormat from '../src/formatters/plain.js';
import buildStylishFormat from '../src/formatters/stylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Test all project', () => {
  test('Correct path to fixtures', () => {
    const pathToFixtures = path.resolve(__dirname, '..', '__fixtures__', 'new.json');
    expect(getFixturesPath('new.json')).toBe(pathToFixtures);
  });

  test('Is the output correct to stylish format', () => {
    const expectedStylishFormat = readFile('expectedStylish.diff');
    expect(genDiff('old.json', 'new.yml')).toEqual(expectedStylishFormat);
    expect(genDiff('old.yaml', 'new.json')).toEqual(expectedStylishFormat);
  });

  test('Is the output correct to plain format', () => {
    const expectedPlainFormat = readFile('expectedPlain.diff');
    expect(genDiff('old.json', 'new.yml', 'plain')).toEqual(expectedPlainFormat);
    expect(genDiff('old.yaml', 'new.json', 'plain')).toEqual(expectedPlainFormat);
  });

  test('Is the output correct to JSON format', () => {
    const expectedJsonFormat = readFile('expectedJson.diff');
    expect(genDiff('old.json', 'new.yml', 'json')).toEqual(expectedJsonFormat);
  });

  test('boom! Error! Error! Error!', () => {
    expect(() => {
      genDiff('old.json', 'new.json', 'blah blah');
    }).toThrow();
    expect(() => {
      parse('old', 'old');
    }).toThrow();
    const errorTree = [{ key: 10, type: undefined }];
    expect(() => {
      buildPlainFormat(errorTree);
    }).toThrow();
    expect(() => {
      buildStylishFormat(errorTree);
    }).toThrow();
  });
});
