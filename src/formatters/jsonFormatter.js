import { jsonParse } from '../utilites/parsers.js';

const formatJSON = (data) => {
  const str = JSON.stringify(data).replaceAll('--', '-').replaceAll('++', '+');
  const parsed = jsonParse(str);
  return parsed;
};
export default formatJSON;
