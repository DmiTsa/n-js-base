import { createReadStream } from 'node:fs';
import getPath from './getPath.js';

const read = async () => {
  const path = getPath('files', 'fileToRead.txt');
  const readStream = createReadStream(path);
  readStream.on('data', (chank) => {
    process.stdout.write(chank);
  });
};

await read();

// read.js — реализовать функцию, которая читает содержимое файла fileToRead.txt
// с помощью Readable Stream и выводит его содержимое в process.stdout.
