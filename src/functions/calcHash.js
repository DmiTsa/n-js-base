const { createHash } = await import('crypto');
import read from '../util/read.js';

const calcHash = async (path) => {
  try {
    const hash = createHash('sha256');
    const data = await read(path);

    hash.update(data);
    console.log(hash.digest('hex'));
  } catch {
    console.error('Error during creation hash');
  }
};

export default calcHash;
