import _ from 'lodash';
import sort from '../utilites/sort.js';

const formatterStylish = (data, replacer = ' ', spaceCount = 1) => {
  const iter = (currentText, depth) => {
    if (!_.isObject(currentText)) {
      return `${currentText}`;
    }
    const indentSize = depth * spaceCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketsIndent = replacer.repeat(indentSize - spaceCount);
    const keysValue = Object.entries(currentText);
    const lines = sort(keysValue)
      .map(([key, value]) => `${currentIndent}${key}: ${iter(value, depth + 1)}`);
    return [
      '{',
      ...lines,
      `${bracketsIndent}}`,
    ].join('\n');
  };
  return iter(data, 1).replaceAll('--', '-').replaceAll('++', '+');
};
export default formatterStylish;
