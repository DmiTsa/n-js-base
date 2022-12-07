import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

function getCurrentPath(ph) {
  const pathRun = dirname(fileURLToPath(ph));
  return pathRun;
}

export default getCurrentPath;
