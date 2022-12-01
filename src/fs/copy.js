// copy.js - реализовать функцию, которая копирует файлы
// из папки files со всем содержимым в папку files_copy на том же уровне
// (если папка с файлами не существует или files_copy уже создана, должна быть выдана ошибка с сообщением Ошибка операции FS)
import { cp, mkdir } from 'node:fs/promises';
import getPath from './getPath.js';
import isAvailable from './isAvailable.js';

const copy = async () => {
  const fullPathSrc = getPath('/files/');
  const fullPathDest = getPath('/files_copy/');
  const errorMsg = 'FS operation failed';

  if (await isAvailable(fullPathSrc)) {
    if (!(await isAvailable(fullPathDest))) {
      // console.log('copy');
      await mkdir(fullPathDest);
      cp(fullPathSrc, fullPathDest);
    } else {
      console.error(errorMsg + '. Destination folder already exsist');
    }
  } else {
    console.error(errorMsg + '. Source folder not found');
  }
};

await copy();
