/* eslint-disable no-underscore-dangle */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const setPathToFile = (file) => path.resolve(__dirname, '..', '..', 'src', file);
