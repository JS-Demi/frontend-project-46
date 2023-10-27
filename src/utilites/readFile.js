import fs from 'fs';
import path from 'path';
import { jsonParse, yamlParse } from './parsers.js';

const readFile = (filepath) => {
  const fileContent = fs.readFileSync(filepath, { encoding: 'utf8' });
  const format = path.extname(filepath);
  let parsed;
  if (format === '.json') {
    parsed = jsonParse(fileContent);
  } else if (format === '.yml') {
    parsed = yamlParse(fileContent);
  } else if (format === '.yaml') {
    parsed = yamlParse(fileContent);
  }
  return parsed;
};

export default readFile;
