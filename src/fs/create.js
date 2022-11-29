import { appendFile, access, constants } from 'node:fs/promises';
import { join } from 'node:path';

const create = async () => {
  const path = './src/fs/files';
  const fileName = 'fresh.txt';
  const data = 'I am fresh and young';

  try {
    await access(join(path, fileName), constants.F_OK);
    console.error('Сбой операции файловой системы');
  } catch {
    appendFile(join(path, fileName), data);
  }
};

await create();
