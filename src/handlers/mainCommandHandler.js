import pathUp from '../functions/pathUp.js';
//
import { join } from 'node:path';
import killProcess from '../util/killProcess.js'; //возможно удалить - заменить на exit
import osInfo from '../functions/osInfo.js';
import calcHash from '../functions/calcHash.js';
import printFile from '../functions/printFile.js';
import createEmptyFIle from '../functions/createEmptyFIle.js';
import deleteFile from '../functions/deleteFIle.js';
import isAvailable from '../util/isAvailable.js';
import commandList from '../data/commandList.js'; //доделать хелп

let currentCommand = [];

async function mainCommandHandler(com, path) {
  const inputCom = com.split(' ');
  inputCom.map((el) => {
    if (el !== '') {
      currentCommand.push(el);
    }
  });

  //Main switch
  switch (currentCommand[0]) {
    case 'up':
      console.log(`path with commandHandler ${path}`);

      let newPath = await pathUp(path);
      console.log(`newPath ${newPath}`);
      return newPath === undefined ? path : newPath;
    case 'os':
      osInfo(currentCommand);
      return path;
    case 'hash':
      if (await isAvailable(currentCommand[1])) {
        await calcHash(currentCommand[1]);
      } else {
        console.log('Impossible to calculate hash: path is incorrect');
      }
      return path;
    // case 'cat':
    //   if (await isAvailable(currentCommand[1])) {
    //     await printFile(currentCommand[1]);
    //   } else {
    //     console.log('Impossible read file: path is incorrect');
    //   }
    //   return path;
    case 'add':
      const fullPath = join(path, currentCommand[1]);
      if (await isAvailable(fullPath)) {
        await deleteFile(fullPath);
        // await createEmptyFIle(path, currentCommand[1]); //добавить атрибут данные
      }
      await createEmptyFIle(path, currentCommand[1]);
      console.log('File created!');
      return path;
    case 'rm':
      if (await isAvailable(currentCommand[1])) {
        deleteFile(currentCommand[1]);
      } else {
        console.log('Impossible to delete file: path to file is incorrect');
      }
      return path;
    case 'compress':
      if (
        (await isAvailable(currentCommand[1])) &&
        (await isAvailable(currentCommand[2]))
      ) {
        // compress function stream
      } else {
        console.log('Impossible to compress file: path is incorrect');
      }
      return path;
    case 'decompress':
      if (
        (await isAvailable(currentCommand[1])) &&
        (await isAvailable(currentCommand[2]))
      ) {
        // compress function stream
      } else {
        console.log('Impossible to decompress file: path is incorrect');
      }
      return path;
    case 'help':
      console.table(commandList, ['command', 'description', 'example']);
      return path;
    // case 'fs??':
    //   null;
    //   break;
    case '.exit':
      killProcess();
      break;
    default:
      console.log('Instruction is not defined');
  }
  return;
}

export default mainCommandHandler;

// КОМАНДЫ:

// up > Перейти вверх из текущего каталога (когда вы находитесь в корневой папке, эта операция не должна изменять рабочий каталог)

// cd path_to_directory > Перейти в выделенную папку из текущего каталога (path_to_directory может быть относительным или абсолютным)

// ls > Вывести в консоли список всех файлов и папок в текущем каталоге. Список должен содержать:
// 	список должен содержать имена файлов и папок (для файлов - с расширением)
// 	папки и файлы сортируются в алфавитном порядке по возрастанию, но сначала идет список папок
// 	тип содержимого каталога должен быть помечен явно (например, как соответствующее значение столбца)

// cat path_to_file > Прочитайте файл и распечатайте его содержимое в консоли (это следует делать с помощью Readable stream):

// add new_file_name > Создать пустой файл в текущем рабочем каталоге:

// rn path_to_file new_filename > Переименуйте файл (содержимое должно остаться без изменений):

// cp path_to_file path_to_new_directory > Скопируйте файл (должно быть выполнено с использованием потоков Readable и Writable):

// mv path_to_file path_to_new_directory > Переместить файл (то же самое, что и копирование, но исходный файл удаляется, часть копирования должна выполняться с использованием потоков Readable и Writable):

// rm path_to_file > удалить файл

// compress path_to_file path_to_destination > Сжать файл (используя алгоритм Brotli, следует использовать Streams API)

// decompress path_to_file path_to_destination > Распаковать файл (используя алгоритм Brotli, следует использовать Streams API)
