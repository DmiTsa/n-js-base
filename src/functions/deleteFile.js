import { rm } from 'node:fs/promises';
// import { join } from 'node:path';

const deleteFile = async (path, fileName) => {
  // const fullPath = join(path);
  rm(path);
};

export default deleteFile;
