const calcHash = async (path) => {
  const { createHash } = await import('node:crypto');
  try {
    const hash = createHash('sha256');
    const data = await read(path);
    console.log('data ' + data);

    hash.update(data);
    console.log('Hash of file: ' + file);
    console.log(hash.digest('hex'));
  } catch {
    console.error('Error during creation hash');
  }
};

export default calcHash;
