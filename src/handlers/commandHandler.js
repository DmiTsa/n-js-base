import killProcess from '../util/killProcess.js'; //доработать
import osCommandHandler from './osCommandHandler.js';
// import osCommandHandler from './osCommandHandler.js'; другой хендлер
// import osCommandHandler from './osCommandHandler.js'; другой хендлер

let currentCommand;

function commandHandler(com) {
  if (com === '.exit') {
    killProcess();
  }
  currentCommand = com.split(' ');

  switch (currentCommand[0]) {
    case 'os':
      osCommandHandler(currentCommand);
      break;
    // case 'hash':
    //   null;
    //   break;
    // case 'compress':
    //   null;
    //   break;
    // case 'decompress':
    //   null;
    //   break;
    // case 'help':
    //   null;
    //   break;
    default:
      console.log('Instruction is not defined');
      console.log("Enter 'help' to get prompt");
  }
  return;
}

export default commandHandler;

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
