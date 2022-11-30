import { createWriteStream } from 'node:fs';
import getPath from './getPath.js';

const write = async () => {
  const path = getPath('files', 'fileToWrite.txt');
  const writeStream = createWriteStream(path);

  console.log('input any data');

  process.stdin.on('data', (chank) => {
    writeStream.write(chank);
  });
};

await write();

// write.js — реализовать функцию, которая записывает данные
// process.stdin в файл fileToWrite.txt с использованием Writable Stream.
