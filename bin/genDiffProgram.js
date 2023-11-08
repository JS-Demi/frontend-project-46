#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1')
  .option('-f, --format [type]', 'Use a spicific output format (default: "stylish")', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((file1, file2) => {
    const options = program.opts();
    console.log(genDiff(file1, file2, options.format));
  });

program.parse();
