import yaml from 'js-yaml';
import path from 'path';

export const jsonParse = (file) => JSON.parse(file);
const yamlParse = (file) => yaml.load(file);

const parse = (fileName, file) => {
  const format = path.extname(fileName);
  if (format === '.json') {
    return jsonParse(file);
  }
  if (format === '.yml') {
    return yamlParse(file);
  }
  if (format === '.yaml') {
    return yamlParse(file);
  }
  return file;
};

export default parse;
