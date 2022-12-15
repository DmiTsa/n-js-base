import { createReadStream } from 'fs';

const printFile = async (path) => {
  let chanks;

  const readStream = createReadStream(path);
  readStream.on('data', (chank) => {
    chanks += chank;
    //  readStream.destroy();
  });
  readStream.on('end', () => {
    console.log(chanks);
    //  readStream.destroy();
  });
  readStream.destroy();
};

export default printFile;
