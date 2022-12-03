import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';

const compress = async () => {
  const pipe = promisify(pipeline);

  async function zipper(input, output) {
    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
  }

  await zipper('input.txt', 'input.txt.gz').catch((err) => {
    console.error('An error occurred:', err);
    //   process.exitCode = 1;
  });
};

await compress();

//compress.js — реализовать функцию, которая сжимает файл fileToCompress.txt в archive.gz, используя zlib и Streams API.
//import { Transform } from 'node:stream';

// import { createWriteStream } from 'node:fs';
// import getPath from './getPath.js';

const transform = async () => {
  //   const path = getPath('files', 'fileToWrite.txt');
  //   const writeStream = createWriteStream(path);

  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split(' ').reverse().join(' '));
    },
  });

  console.log('input text here:');
  process.stdin.pipe(reverse).pipe(process.stdout);
  //   process.stdin.pipe(reverse).pipe(writeStream);
};
