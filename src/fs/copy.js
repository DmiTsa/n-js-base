// copy.js - реализовать функцию, которая копирует файлы
// из папки files со всем содержимым в папку files_copy на том же уровне
// (если папка с файлами не существует или files_copy уже создана, должна быть выдана ошибка с сообщением Ошибка операции FS)
import { cp, appendFile, access, constants } from 'node:fs/promises';

const copy = async () => {
  //   const src = './src/fs/files';
  //   const dest = './src/fs/files_copy';
  const src = 'c:/p1';
  const dest = 'c:/p1copy';

  cp(src, dest);
};
copy();

// import { appendFile, access, constants } from 'node:fs/promises';
// import { join } from 'node:path';

// const create = async () => {
//   const path = './src/fs/files';
//   const fileName = 'fresh.txt';
//   const data = 'I am fresh and young';

//   try {
//     await access(join(path, fileName), constants.F_OK);
//     console.error('Сбой операции файловой системы');
//   } catch {
//     appendFile(join(path, fileName), data);
//   }
// };

// await create();
