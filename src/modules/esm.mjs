import { sep } from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'node:http'; //
import './files/c.js';

import { createRequire } from 'node:module';

const random = Math.random();
const pathFile = fileURLToPath(import.meta.url);
const pathRun = dirname(pathFile);

import { assert } from 'console';

let unknownObject = 1;

if (true) {
  //random > 0.5
  const unknownObject = createRequire(import.meta.url);
} else {
  // unknownObject = data2.name;
  // unknownObject = await import('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${pathFile}`);
console.log(`Path to current directory is ${pathRun}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
