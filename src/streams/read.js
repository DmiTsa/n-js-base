// import { createReadStream } from 'node:fs';
import { Readable } from 'node:stream';
import { stdin, stdout } from 'node:process';

const read = async () => {
  //   const readStream = createReadStream('c:/test.txt');
  //   readStream.on('readable', () => {
  //     console.log(readStream.read());
  //   });

  for await (const chunk of Readable.from('c:/test.txt')) {
    console.log(chunk);
  }
  const r = stdout.read('re');
  console.log(r);
};

await read();
// readable.setEncoding(encoding)

// read.js — реализовать функцию, которая читает содержимое файла fileToRead.txt
// с помощью Readable Stream и выводит его содержимое в process.stdout.

//// const fs = require('node:fs');
// //const rr = fs.createReadStream('foo.txt');
// rr.on('readable', () => {
// console.log(`readable: ${rr.read()}`);
// });
// rr.on('end', () => {
//   console.log('end');
// });
