import stylishFormat from './stylish.js';
import plainFormat from './plain.js';

const selectedFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormat(data);
    case 'plain':
      return plainFormat(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error('Unknown format type');
  }
};
export default selectedFormat;
