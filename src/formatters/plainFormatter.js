import _ from 'lodash';
import clean from '../utilites/cleanOutput.js';
import findPath from '../utilites/findPath.js';

const formatterPlain = (data) => {
  const result = [];
  const iter = (node) => {
    Object.entries(node)
      .map(([key, value]) => {
        if (key.split(' ').slice(0, 2).length < 2 && _.isObject(value)) {
          return iter(value);
        }
        const isNested = (currentValue) => {
          if (!_.isObject(currentValue)) {
            return _.isString(currentValue) ? `'${currentValue}'` : currentValue;
          }
          return '[complex value]';
        };
        switch (key.split(' ')[0]) {
          case '--':
            result.push(`Property ${findPath(data, key, value)} was updated. From ${isNested(value)} `);
            break;
          case '++':
            result.push(result.pop().concat(`to ${isNested(value)}`));
            break;
          case '+':
            result.push(`Property ${findPath(data, key, value)} was added with value: ${isNested(value)}`);
            break;
          case '-':
            result.push(`Property ${findPath(data, key, value)} was removed`);
            break;
          default:
            break;
        }
        return result;
      });
    return clean(result.join('\n'));
  };
  return iter(data);
};

export default formatterPlain;
