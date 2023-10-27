import fs from 'fs';
import parseFile from './dataParse.js';

const readFile = (pathfile) => {
  const fileContent = fs.readFileSync(pathfile, { encoding: 'utf8' });
  const parsed = parseFile(fileContent);
  return parsed;
};

export default readFile;
