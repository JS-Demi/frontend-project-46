/* eslint-disable import/no-extraneous-dependencies */
import yaml from 'js-yaml';

export const jsonParse = (file) => JSON.parse(file);
export const yamlParse = (file) => yaml.load(file);
