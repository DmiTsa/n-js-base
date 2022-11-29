import { rm, access, constants } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
  const pathRun = dirname(fileURLToPath(import.meta.url));
  const path = '/files';
  const file = 'fileToRemove.txt';
  const errorMsg = 'FS operation failed';

  try {
    await access(join(pathRun, path, file), constants.F_OK);
    rm(join(pathRun, path, file));
  } catch {
    console.error(errorMsg);
  }
};

await remove();
