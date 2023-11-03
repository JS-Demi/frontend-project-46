import _ from 'lodash';

const findPath = (tree, key, value) => {
  const result = [];
  const iter = (node, path) => {
    let currentPath = path;
    Object
      .entries(node)
      .map(([iterKey, iterValue]) => {
        if (_.isObject(iterValue)) {
          currentPath = path === '' ? `${path}${iterKey}` : `${path}.${iterKey}`;
          iter(iterValue, currentPath);
        }
        if (key === iterKey && value === iterValue) {
          const pathValue = path !== '' ? `${path}.${iterKey}` : iterKey;
          return result.push(pathValue);
        }
        return result;
      });
    return `'${result}'`;
  };
  return iter(tree, '');
};

export default findPath;
