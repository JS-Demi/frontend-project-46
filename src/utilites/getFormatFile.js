import path from 'path';

const getFormat = (data) => path.extname(data).replace('.', '');

export default getFormat;
