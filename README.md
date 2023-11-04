# genDiff.js

[![Actions Status](https://github.com/JS-Demi/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/JS-Demi/frontend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/cda8be9562e74d9b050b/maintainability)](https://codeclimate.com/github/JS-Demi/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/cda8be9562e74d9b050b/test_coverage)](https://codeclimate.com/github/JS-Demi/frontend-project-46/test_coverage)

The difference calculator for [node.js](http://nodejs.org).

- [genDiff.js](#genDiffjs)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
  - [Formats](#formats)
  - [Examples](#examples)
    - [Stylish](#simple-node-data-files-with-default-formattee-stylish)
    - [Plain](#nested-data-with-formatter-plain)
    - [Json](#nested-data-with-formatter-json)

## Installation

```sh
npm install @hexlet/code
```

## Quick Start

Run genDiff with the paths to the two files and desired format.
Gendiff reads the files and calculates the differences in the data,
then return the differences in the specified format.
If you don't specify a format gendiff will use the default 'stylish' format.
Gendiff works with JSON and YML file formats.

[Examples](#examples)

```js
import genDiff from '@hexlet/code';

console.log(genDiff(filepath1, filepath2));
```
## Formats
- [Stylish(default)](#simple-node-data-files-with-default-formatter-stylish)
- [Plain](#nested-data-with-formatter-plain)
- [Json](#nested-data-with-formatter-json)

## Examples 

### Simple node data files with default formatter 'stylish'

[![asciicast](https://asciinema.org/a/9vHf9f2gOA0C4h0t08lWUPrRW.svg)](https://asciinema.org/a/9vHf9f2gOA0C4h0t08lWUPrRW)

[![asciicast](https://asciinema.org/a/qQpMXbekdnSD9nugQY2hGFeti.svg)](https://asciinema.org/a/qQpMXbekdnSD9nugQY2hGFeti)

### Nested data with default formatter 'stylish'

[![asciicast](https://asciinema.org/a/0V1fyvWR7lDX3wiLbrujg5jIu.svg)](https://asciinema.org/a/0V1fyvWR7lDX3wiLbrujg5jIu)

### Nested data with formatter 'plain'

[![asciicast](https://asciinema.org/a/3ALpKXyeAWr7XSNSppxfOyu02.svg)](https://asciinema.org/a/3ALpKXyeAWr7XSNSppxfOyu02)

### Nested data with formatter 'json':

[![asciicast](https://asciinema.org/a/uJ7fOGqk77f6GnLygSsEIORFJ.svg)](https://asciinema.org/a/uJ7fOGqk77f6GnLygSsEIORFJ)