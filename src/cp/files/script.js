const args = process.argv.slice(2);
// const args = ['--arg1', 'rrrt', '--arg2', 'tttt'];

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
  const chunkStringified = chunk.toString();
  if (chunkStringified.includes('CLOSE')) process.exit(0);
  process.stdout.write(`Received from master process: ${chunk.toString()}\n`);
};

process.stdin.on('data', echoInput);
