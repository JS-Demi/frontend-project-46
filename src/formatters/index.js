import stylishFormat from './stylish.js';
import plainFormat from './plain.js';
import jsonFormat from './json.js';

const setTheFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormat(data);
    case 'plain':
      return plainFormat(data);
    case 'json':
      return jsonFormat(data);
    default:
      throw new Error('Unknown format type');
  }
};
export default setTheFormat;
