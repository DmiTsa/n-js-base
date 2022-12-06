// const readlinePromises = require('node:readline/promises');
// import { readlinePromises } from 'node:readline/promises';
// import { createRequire } from 'module';

// const rl = readlinePromises.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('line', (line) => {
//   console.log(`Received: ${line}`);
// });
let wor;
console.log('вы здесь');

process.stdin.setEncoding('utf-8').on('data', (data) => {
  wor = data;
  console.log('слово ' + wor);
});
