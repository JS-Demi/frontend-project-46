import parse from './utilites/parsers.js';
import readFile from './utilites/readFile.js';
import setTheFormat from './formatters/index.js';
import makeTree from './utilites/makeTree.js';
import getFormat from './utilites/getFormatFile.js';

function genDiff(file1, file2, format = 'stylish') {
  const contentFile1 = readFile(file1);
  const contentFile2 = readFile(file2);
  const parsedFile1 = parse(contentFile1, getFormat(file1));
  const parsedFile2 = parse(contentFile2, getFormat(file2));
  const differenceTree = makeTree(parsedFile1, parsedFile2);
  const result = setTheFormat(differenceTree, format);
  return result;
}
export default genDiff;
