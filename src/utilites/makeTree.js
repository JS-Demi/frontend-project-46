import _ from 'lodash';

export default function makeTree(oldObj, newObj) {
  const keys = _.sortBy(Object.keys({ ...oldObj, ...newObj }), (key) => key);
  const tree = keys.map((key) => {
    const oldValue = oldObj[key];
    const newValue = newObj[key];
    if (_.has(newObj, key) && !_.has(oldObj, key)) {
      return { key, type: 'created', value: newValue };
    }
    if (!_.has(newObj, key) && _.has(oldObj, key)) {
      return { key, type: 'removed', value: oldValue };
    }
    if (_.isObject(oldValue) && _.isObject(newValue)) {
      return { key, type: 'nested', children: makeTree(oldValue, newValue) };
    }
    const unchanged = { key, type: 'unchanged', value: oldValue };
    const updated = {
      key, type: 'updated', oldValue, newValue,
    };
    return oldValue === newValue ? unchanged : updated;
  });
  return tree;
}
