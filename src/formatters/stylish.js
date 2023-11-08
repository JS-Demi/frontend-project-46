import _ from 'lodash';

const stringify = (value, depth = 1, indentCount = 4, indent = ' ') => {
  if (!_.isObject(value)) {
    return value;
  }
  const indentSize = depth * indentCount;
  const currentIndent = indent.repeat(indentSize);
  const bracketsIndent = indent.repeat(indentSize - indentCount);
  const result = Object.keys(value)
    .map((key) => `${currentIndent}${key}: ${stringify(value[key], depth + 1)}`);
  return [
    '{',
    ...result,
    `${bracketsIndent}}`,
  ].join('\n');
};

function buildStylishFormat(tree, depth = 1, indentCount = 4, indent = ' ') {
  const indentSize = depth * indentCount;
  const currentIndent = indent.repeat(indentSize);
  const changedLineIndent = indent.repeat(indentSize - 2);
  const bracketsIndent = indent.repeat(indentSize - indentCount);
  const result = tree
    .map((node) => {
      switch (node.type) {
        case 'unchanged':
          return `${currentIndent}${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'created':
          return `${changedLineIndent}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'removed':
          return `${changedLineIndent}- ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'updated':
          return [
            `${changedLineIndent}- ${node.key}: ${stringify(node.oldValue, depth + 1)}`,
            `${changedLineIndent}+ ${node.key}: ${stringify(node.newValue, depth + 1)}`,
          ].join('\n');
        case 'nested':
          return `${currentIndent}${node.key}: ${buildStylishFormat(node.children, depth + 1)}`;
        default:
          throw new Error(`Unknown type! ${node.type} is wrong!`);
      }
    });
  return [
    '{',
    ...result,
    `${bracketsIndent}}`,
  ].join('\n');
}
export default buildStylishFormat;
