const commandList = [
  // {
  //   command: 'up',
  //   group: 'file system',
  //   description: 'Move to up from current path',
  //   example: 'up <path_to_directory>',
  // },
  {
    command: 'add',
    group: 'file system',
    description: 'Create empty file from current path',
    example: 'add <new_file_name>',
  },
  {
    command: 'rm',
    group: 'file system',
    description: 'Delete file from current path',
    example: 'rm <path_to_file>',
  },
  {
    command: 'os --EOL',
    group: 'operation system',
    description: 'Get information of EOLs current operation system',
    example: 'os --EOL',
  },
  {
    command: 'os --cpus',
    group: 'operation system',
    description: 'Get information of CPUs current operation system',
    example: 'os --cpus',
  },
  {
    command: 'os --homedir',
    group: 'operation system',
    description: 'Get information of home direcrory current PC',
    example: 'os --homedir',
  },
  {
    command: 'os --username',
    group: 'operation system',
    description: 'Get information of current user',
    example: 'os --username',
  },
  {
    command: 'os --architecture',
    group: 'operation system',
    description: 'Get information of architecture current PC',
    example: 'os --architecture',
  },
  {
    command: 'hash',
    group: 'hash',
    description: 'Calculeted hash for file',
    example: 'hash <path_to_file>',
  },
];

// {
//   fs: ['up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm'],
//   os: ['os'],
//   hash: ['hash'],
//   zip: ['compress', 'decompress'],
// };

export default commandList;

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
