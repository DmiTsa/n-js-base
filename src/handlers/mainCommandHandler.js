import killProcess from '../util/killProcess.js'; //возможно удалить - заменить на exit
import osInfo from '../functions/osInfo.js';
import calcHash from '../functions/calcHash.js';
import isAvailable from '../util/isAvailable.js';

const commandsIdent = {
  fs: ['up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm'],
  os: ['os'],
  hash: ['hash'],
  zip: ['compress', 'decompress'],
};

let currentCommand;

async function mainCommandHandler(com, path) {
  if (com === '.exit') {
    killProcess();
  }
  // if help добавить

  currentCommand = com.split(' ');

  switch (currentCommand[0]) {
    case 'os':
      osInfo(currentCommand);
      return path;
    case 'hash':
      if (isAvailable(currentCommand[1])) {
        await calcHash(currentCommand[1]);
      } else {
        console.log('Impossible to calculate hash: path is incorrect');
      }
      return path;
    // case 'compress':
    //   null;
    //   break;
    // case 'decompress':
    //   null;
    //   break;
    default:
      console.log('Instruction is not defined');
      console.log("Enter 'help' to get prompt");
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

// hash path_to_file > Вычислить хэш для файла и вывести его в консоль

// compress path_to_file path_to_destination > Сжать файл (используя алгоритм Brotli, следует использовать Streams API)

// decompress path_to_file path_to_destination > Распаковать файл (используя алгоритм Brotli, следует использовать Streams API)
