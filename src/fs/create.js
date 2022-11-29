import { appendFile, access, constants } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
  const pathRun = dirname(fileURLToPath(import.meta.url));
  const pathDest = '/files';
  const fileName = 'fresh.txt';
  const data = 'I am fresh and young';
  const errorMsg = 'FS operation failed';

  try {
    await access(join(pathRun, pathDest, fileName), constants.F_OK);
    console.error(errorMsg);
  } catch {
    appendFile(join(pathRun, pathDest, fileName), data);
  }
};

await create();
