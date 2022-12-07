import getCurrentPath from '../util/getCurrentPath.js';
import commandHandler from './fileManager/commandHandler.js';

const args = process.argv;
const username = getArgValue(args, '--username=');
const homePath = null;
const currentPath = getCurrentPath(import.meta.url);

console.log(
  `Welcome to the File Manager${username === undefined ? '' : ', ' + username}!`
);

greeting(currentPath);

process.stdin.setEncoding('utf-8').on('data', (str) => {
  //сделать возврат кода хендлером объект {code, path}
  const status = commandHandler(str);
  greeting(currentPath);
  //написать exit функцию
});

// You are currently in path_to_working_directory

//TODO После завершения работы программы (нажатие ctrl+c или ввод пользователем команды .exit в консоль) программа выводит в консоль следующий текст Thank you for using File Manager, Username, goodbye!
// console.log(`Thank you for using File Manager, ${username}, goodbye!`);

//Functions

function greeting(path) {
  console.log(`You are currently in ${path}`);
}

function getArgValue(args, argName) {
  let value;
  args.forEach((el) => {
    if (el.startsWith(argName)) {
      value = el.slice(argName.length, el.length);
    }
  });
  return value;
}

// //TODO При запуске программы и после каждого завершения ввода/операции текущий рабочий каталог должен выводиться следующим образом: You are currently in path_to_working_directory

// //TODO Начальный рабочий каталог — это домашний каталог текущего пользователя (например, в Windows это что-то вроде  system_drive/Users/Username

// //TODO По умолчанию программа должна предлагать пользователю в консоли печатать команды и ждать результатов.

// //TODO В случае неизвестной операции или неверного ввода (отсутствуют обязательные аргументы, неверные данные в аргументах и ​​т. д.) должно отображаться сообщение о недопустимом вводе, и пользователь должен иметь возможность ввести другую команду.

// //TODO В случае ошибки во время выполнения операции должно быть показано сообщение «Операция не удалась», и пользователь должен иметь возможность ввести другую команду (например, попытка выполнить операцию с несуществующим файлом или работать с несуществующим путем должна привести к сбою операции). )

// //TODO Пользователь не может перейти выше корневого каталога (например, в Windows это текущий корень локального диска). Если пользователь попытается это сделать, текущий рабочий каталог не изменится.
