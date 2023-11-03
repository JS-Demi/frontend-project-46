const clean = (str) => str
  .replaceAll('-- ', '')
  .replaceAll('++ ', '')
  .replaceAll('- ', '')
  .replaceAll('+ ', '');
export default clean;
