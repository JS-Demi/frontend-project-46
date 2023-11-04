import { jsonParse } from '../utilites/parsers.js';

const formatJSON = (data) => {
  const str = JSON.stringify(data);
  const cleaned = str.replaceAll('--', '-').replaceAll('++', '+');
  return jsonParse(cleaned);
};
export default formatJSON;
