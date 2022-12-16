import fs from 'fs';
import { readdir, opendir } from 'fs/promises';
import { join } from 'path';
import async from 'async';

async function list(path) {
  const files = await readdir(path); //названия файлов и папок
  // let type;

  const res = files.map((el) => {
    let fullPath = join(path, el);

    console.log(showDir(fullPath));

    return { name: el, fullPath };
  });
  // console.log(res); // res [{name: 'promise.js', type: undefined, fullPath: 'C:\\Users\\dmitr\\test\\APIpromise.js' }, {}]

  //functions
  // function typePath(path) {
  //   return fs.stat(path, (err, stats) => {
  //     return stats.isFile();
  //   });
  // }
  async function showDir(path) {
    const dir = await opendir(path);
    return dir;
  }
}

await list('C:\\Users\\dmitr\\test');
