import _ from 'lodash';

const buildPath = (path, key) => (path === '' ? key : `${path}.${key}`);
const isNested = (currentValue) => {
  if (!_.isObject(currentValue)) {
    return _.isString(currentValue) ? `'${currentValue}'` : currentValue;
  }
  return '[complex value]';
};

function buildPlainFormat(tree) {
  const iter = (node, path) => {
    const result = node
      .filter((item) => item.type !== 'unchanged')
      .map((obj) => {
        const currentPath = buildPath(path, obj.key);
        switch (obj.type) {
          case 'created':
            return `Property '${currentPath}' was added with value: ${isNested(obj.value)}`;
          case 'removed':
            return `Property '${currentPath}' was removed`;
          case 'updated':
            return `Property '${currentPath}' was updated. From ${isNested(obj.oldValue)} to ${isNested(obj.newValue)}`;
          case 'nested':
            return iter(obj.children, currentPath);
          default:
            throw new Error(`Unknown type! ${node.type} is wrong!`);
        }
      });
    return result.join('\n');
  };
  return iter(tree, '');
}

export default buildPlainFormat;
