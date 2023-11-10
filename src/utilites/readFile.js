import fs from 'fs';
import getFixturesPath from './getFixturesPath.js';

const readFile = (file) => {
  const filepath = getFixturesPath(file);
  const fileContent = fs.readFileSync(filepath, { encoding: 'utf8' });
  return fileContent;
};
export default readFile;
