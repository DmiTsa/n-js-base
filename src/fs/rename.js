// rename.js - реализовать функцию, которая переименовывает файл
// wrongFilename.txt в properFilename с расширением .md
// (если файл wrongFilename.txt или properFilename.md уже существует, должна быть выдана ошибка с сообщением Ошибка операции FS)
import { rename, access, constants } from 'node:fs/promises';
import { join } from 'node:path';

const renameFile = async () => {};
const path = './src/fs/files';
const wrongName = 'wrongFilename.txt';
const properName = 'properFilename.md';

// console.log(access(join(path, properName), constants.F_OK));
let a1 = 1;
try {
  a1 = await access(join(path, wrongName), constants.F_OK);
  //   const a2 = await access(join(path, properName), constants.F_OK);
  console.error('Сбой операции файловой системы');
  console.log(a1);
  //   console.log(a2);
} catch {
  console.log('catch');
  console.log(a1);

  //   rename(join(path, wrongName), join(path, properName));
}

await renameFile();
