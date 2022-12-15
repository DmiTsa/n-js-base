import { appendFile } from 'node:fs/promises';
import { join } from 'node:path';

const createEmptyFIle = async (path, fileName) => {
  const fullPath = join(path, fileName);
  const data = '';

  appendFile(fullPath, data);
  console.log('File created!');
};

export default createEmptyFIle;
