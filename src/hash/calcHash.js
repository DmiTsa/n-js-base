import read from './read.js';

const calculateHash = async () => {
  const { createHash } = await import('node:crypto');

  const hash = createHash('sha256');
  const data = await read('files', 'fileToCalculateHashFor.txt');

  hash.update(data);
  console.log(hash.digest('hex'));
};

await calculateHash();
