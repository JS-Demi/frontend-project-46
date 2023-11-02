#!/usr/bin/env node

// eslint-disable-next-line import/no-extraneous-dependencies
import { Command } from 'commander';
import genDiff from '../index.js';
import { getPathToSrc } from '../src/utilites/getPathToFile.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1')
  .option('-f, --format [type]', 'output format (default: "stylish")', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((file1, file2) => {
    const filepath1 = getPathToSrc(file1);
    const filepath2 = getPathToSrc(file2);
    console.log(genDiff(filepath1, filepath2));
  });

program.parse();
