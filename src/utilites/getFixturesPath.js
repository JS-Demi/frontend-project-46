import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturesPath = (file) => path.join(__dirname, '..', '..', '__tests__', '__fixtures__', file);

export default getFixturesPath;
