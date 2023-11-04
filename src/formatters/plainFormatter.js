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
        let currentValue;
        if (key.startsWith('--')) {
          if (!_.isObject(value)) {
            currentValue = _.isString(value) ? `'${value}'` : value;
          } else currentValue = '[complex value]';
          const updOutput = `Property ${findPath(data, key, value)} was updated. From ${currentValue} `;
          result.push(updOutput);
        }
        if (key.startsWith('++')) {
          if (!_.isObject(value)) {
            currentValue = _.isString(value) ? `'${value}'` : value;
          } else currentValue = '[complex value]';
          const newValue = result.pop().concat(`to ${currentValue}`);
          result.push(newValue);
        }
        if (key.split(' ')[0] === '+') {
          if (_.isObject(value) && value !== null) {
            currentValue = '[complex value]';
          } else currentValue = _.isString(value) ? `'${value}'` : value;
          const addOutput = `Property ${findPath(data, key, value)} was added with value: ${currentValue}`;
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
