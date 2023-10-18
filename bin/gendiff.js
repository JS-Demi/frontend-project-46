#!/usr/bin/env node

// eslint-disable-next-line import/no-extraneous-dependencies
import { Command } from 'commander';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format');

program.parse();
