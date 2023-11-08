import yaml from 'js-yaml';
import path from 'path';

const parse = (fileName, file) => {
  const format = path.extname(fileName);
  switch (format) {
    case '.json':
      return JSON.parse(file);
    case '.yml':
      return yaml.load(file);
    case '.yaml':
      return yaml.load(file);
    default:
      throw new Error(`Unknow type! Type ${format} is not supported!`);
  }
};

export default parse;
