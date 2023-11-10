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

const pathToFixtures = path.resolve(__dirname, '..', '__fixtures__', 'new.json');
const expectedStylishFormat = readFile('expectedStylish.diff');
const expectedPlainFormat = readFile('expectedPlain.diff');
const expectedJsonFormat = readFile('expectedJson.diff');
const errorTree = [{ key: 10, type: undefined }];

describe('Tests genDiff project', () => {
  describe('test main efficiency of project', () => {
    test('Correct path to fixtures', () => {
      expect(getFixturesPath('new.json')).toBe(pathToFixtures);
    });

    test.each([
      {
        format: 'stylish',
        expected: expectedStylishFormat,
      },
      {
        format: 'plain',
        expected: expectedPlainFormat,
      },
      {
        format: 'json',
        expected: expectedJsonFormat,
      },
    ])('Is the output correct with $format format', ({ format, expected }) => {
      expect(genDiff('old.json', 'new.yml', format)).toEqual(expected);
      expect(genDiff('old.yaml', 'new.json', format)).toEqual(expected);
    });
  });

  describe('Should throw Error', () => {
    test('boom! Should be Error in buildFormats', () => {
      expect(() => {
        buildPlainFormat(errorTree);
      }).toThrow();
      expect(() => {
        buildStylishFormat(errorTree);
      }).toThrow();
    });

    test('boom! Should be Error in parse', () => {
      expect(() => {
        parse('old', 'new');
      }).toThrow();
    });
    test('boom! Should be Error in gendiff', () => {
      expect(() => {
        genDiff('old.json', 'new.json', 'yml');
      }).toThrow();
    });
  });
});
