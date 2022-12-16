import { access, constants } from 'node:fs/promises';

const isAvailable = async (path = '') => {
  //передавать сгк зфыы
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

export default isAvailable;
