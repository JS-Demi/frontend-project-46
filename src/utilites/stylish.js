import _ from 'lodash';

const formatText = (text, replacer = ' ', spaceCount = 1) => {
  const iter = (currentText, depth) => {
    if (!_.isObject(currentText)) {
      return `${currentText}`;
    }
    const indentSize = depth * spaceCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketsIndent = replacer.repeat(indentSize - spaceCount);
    const keysValue = Object.entries(currentText);
    const sorted = _.sortBy(keysValue, ([val]) => {
      if (val.split(' ').length > 1) {
        const [, key] = val.split(' ');
        return key;
      }
      return val;
    });
    const lines = sorted
      .map(([key, value]) => `${currentIndent}${key}: ${iter(value, depth + 1)}`);
    return [
      '{',
      ...lines,
      `${bracketsIndent}}`,
    ].join('\n');
  };
  return iter(text, 1);
};
export default formatText;
