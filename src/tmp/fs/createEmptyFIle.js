import { appendFile } from 'node:fs/promises';
import { join } from 'node:path';

const createEmptyFIle = async (path, fileName) => {
  const fullPath = join(path, fileName);
  const data = '';
  try {
    appendFile(fullPath, data);
    console.log('File created!');
  } catch {
    console.error('Error during creation file');
  }
};

export default createEmptyFIle;
