import { readFile } from 'node:fs/promises';

const readFile = async (path) => {
  try {
    const content = await readFile(path, 'utf-8');
    return content;
  } catch {
    console.error('Error reading file');
  }
};

export default readFile;
