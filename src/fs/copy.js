// copy.js - реализовать функцию, которая копирует файлы
// из папки files со всем содержимым в папку files_copy на том же уровне
// (если папка с файлами не существует или files_copy уже создана, должна быть выдана ошибка с сообщением Ошибка операции FS)
import { cp, access, constants, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
  const pathRun = dirname(fileURLToPath(import.meta.url));
  const src = '/files';
  const dest = '/files_copy';
  const errorMsg = 'FS operation failed';

  try {
    await access(join(pathRun, src), constants.F_OK); ///нужна проверка есть ли папка а не файл
    try {
      await access(join(pathRun, dest), constants.F_OK);
      console.error(errorMsg);
    } catch {
      mkdir(join(pathRun, dest));
      cp(join(pathRun, src), join(pathRun, dest));
    }
  } catch {
    console.error(errorMsg);
  }
};

await copy();
