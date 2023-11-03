import _ from 'lodash';

const sort = (data) => {
  const sorted = _.sortBy(data, ([val]) => {
    if (val.split(' ').length > 1) {
      const [, key] = val.split(' ');
      return key;
    }
    return val;
  });
  return sorted;
};

export default sort;
