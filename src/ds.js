import { once } from 'events';
// import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import commandHandler from './handlers/commandHandler.js';

(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: process.stdin,
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
      commandHandler(line);
      // console.log('линия ' + line);
    });

    await once(rl, 'close');

    // console.log('File processed.');
  } catch (err) {
    console.error(err);
  }
})();
