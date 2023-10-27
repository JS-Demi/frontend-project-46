import fs from 'fs';
import parseFile from './dataParse.js';
import { setPathToFile } from './setPathToFile.js';

const readFile = (el) => {
  const pathToFile = setPathToFile(el);
  const fileContent = fs.readFileSync(pathToFile, { encoding: 'utf8' });
  const parsed = parseFile(fileContent);
  return parsed;
};

export default readFile;
