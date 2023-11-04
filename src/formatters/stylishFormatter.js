import _ from 'lodash';

const formatterStylish = (data, replacer = ' ', spaceCount = 4) => {
  const iter = (currentText, depth) => {
    if (!_.isObject(currentText)) {
      return `${currentText}`;
    }
    const indentSize = depth * spaceCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketsIndent = replacer.repeat(indentSize - spaceCount);
    const lines = Object.entries(currentText)
      .map(([key, value]) => (key.startsWith('+') || key.startsWith('-')
        ? `${replacer.repeat(depth * spaceCount - 2)}${key}: ${iter(value, depth + 1)}`
        : `${currentIndent}${key}: ${iter(value, depth + 1)}`));
    return [
      '{',
      ...lines,
      `${bracketsIndent}}`,
    ].join('\n');
  };
  return iter(data, 1).replaceAll('--', '-').replaceAll('++', '+');
};
export default formatterStylish;
