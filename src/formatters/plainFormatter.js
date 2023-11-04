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
        if (key.startsWith('--')) {
          const updOutput = `Property ${findPath(data, key, value)} was updated. From ${isNested(value)} `;
          result.push(updOutput);
        }
        if (key.startsWith('++')) {
          const newValue = result.pop().concat(`to ${isNested(value)}`);
          result.push(newValue);
        }
        if (key.split(' ')[0] === '+') {
          const addOutput = `Property ${findPath(data, key, value)} was added with value: ${isNested(value)}`;
          result.push(addOutput);
        }
        if (key.split(' ')[0] === '-') {
          const delOutput = `Property ${findPath(data, key, value)} was removed`;
          result.push(delOutput);
        }

        return result;
      });
    return clean(result.join('\n'));
  };
  return iter(data);
};

export default formatterPlain;
