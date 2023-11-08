# genDiff.js

[![Actions Status](https://github.com/JS-Demi/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/JS-Demi/frontend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/cda8be9562e74d9b050b/maintainability)](https://codeclimate.com/github/JS-Demi/frontend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/cda8be9562e74d9b050b/test_coverage)](https://codeclimate.com/github/JS-Demi/frontend-project-46/test_coverage)

Вычислитель отличий для [node.js](http://nodejs.org).

- [genDiff.js](#genDiffjs)
  - [Установка](#установка)
  - [Быстрый старт](#быстрый-старт)
  - [Форматы](#форматы)
  - [Примеры](#примеры)
    - [Stylish](#примеры-работы-функции-с-плоскими-файлами-с-использованием-форматера-по-умолчанию-stylish)
    - [Plain](#файлы-с-вложенными-даннымиформатер-plain)
    - [Json](#файлы-с-вложенными-даннымиформатер-json)

## Установка

```sh
npm install @hexlet/code
```

## Быстрый старт
Добавьте ваши файлы в папку __fixtures__.
Запустите gendiff с флагом -f или --format желаемого формата и именами ваших файлов.
gendiff прочитает файлы, вычислит отличия в данных, затем выведет данные в указанном формате.
Если при вызове команды не будет указан формат, будет использоваться формат по умолчанию 'stylish'.
Функция поддерживает JSON и YML форматы файлов.

[Примеры](#примеры)

```js
import genDiff from '@hexlet/code';

console.log(genDiff(file1, file2));
```
## Форматы
- [Stylish(default)](#файлы-с-вложенными-даннымиформатер-по-умолчанию-stylish)
- [Plain](#файлы-с-вложенными-даннымиформатер-plain)
- [Json](#файлы-с-вложенными-даннымиформатер-json)

## Примеры 

### Примеры работы функции с плоскими файлами с использованием форматера по умолчанию 'stylish'
[![asciicast](https://asciinema.org/a/9vHf9f2gOA0C4h0t08lWUPrRW.svg)](https://asciinema.org/a/9vHf9f2gOA0C4h0t08lWUPrRW)

[![asciicast](https://asciinema.org/a/qQpMXbekdnSD9nugQY2hGFeti.svg)](https://asciinema.org/a/qQpMXbekdnSD9nugQY2hGFeti)

### Файлы с вложенными данными(форматер по умолчанию 'stylish')

[![asciicast](https://asciinema.org/a/xNxUVUvN8v1BoiF2VrNHqo4HP.svg)](https://asciinema.org/a/xNxUVUvN8v1BoiF2VrNHqo4HP)

### Файлы с вложенными данными(форматер 'plain')

[![asciicast](https://asciinema.org/a/tHdyhKP7qWXYhlCVNvBoSLedn.svg)](https://asciinema.org/a/tHdyhKP7qWXYhlCVNvBoSLedn)

### Файлы с вложенными данными(форматер 'json')

[![asciicast](https://asciinema.org/a/eXkSoliFj7KL0noecJzuzjhPj.svg)](https://asciinema.org/a/eXkSoliFj7KL0noecJzuzjhPj)