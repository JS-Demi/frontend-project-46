/* eslint-disable no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPathToFixtures = (file) => path.join(__dirname, '..', '..', '__fixtures__', file);
const getPathToSrc = (file) => path.join(__dirname, '..', file);

console.log(getPathToFixtures('testFile1.json'));
export { getPathToFixtures, getPathToSrc };
