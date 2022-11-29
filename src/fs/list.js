// list.js - реализовать функцию, которая выводит весь массив имен файлов из папки с файлами в консоль (если папка с файлами не существует, должна быть выдана ошибка с сообщением о сбое операции FS)
import { readdir, access, constants } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
  const pathRun = dirname(fileURLToPath(import.meta.url));
  const path = '/files';
  const errorMsg = 'FS operation failed';

  try {
    await access(join(pathRun, path), constants.F_OK);

    const files = await readdirjoin(pathRun, path);
    console.log(files);

    // for (const file of files)
    //   console.log(file);

    // rm(join(pathRun, path, file));
  } catch {
    console.error(errorMsg);
  }
};

await list();
