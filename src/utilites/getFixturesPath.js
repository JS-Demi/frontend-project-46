import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturesPath = (file) => path.resolve(__dirname, '..', '..', '__fixtures__', file);

export default getFixturesPath;
