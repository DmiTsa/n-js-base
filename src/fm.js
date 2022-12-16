import { once } from 'events';
import { createInterface } from 'readline';
import mainCommandHandler from './handlers/mainCommandHandler.js';
import state from './data/state.js';
import greeting from './util/greeting.js';

let { currentPath, username } = state;

console.log(
  `Welcome to the File Manager${username === undefined ? '' : ', ' + username}!`
);

greeting(currentPath);
await processCommand(currentPath);

//Functions
async function processCommand(path) {
  try {
    const rl = createInterface({
      input: process.stdin,
      crlfDelay: Infinity,
    });

    rl.on('line', async (line) => {
      await mainCommandHandler(line);
      // greeting(currentPath); //нужно переносить пути  и гретинг в майн команд хендлер
    });

    await once(rl, 'close');
  } catch (err) {
    console.error(err);
  }
}

//TODO После завершения работы программы (нажатие ctrl+c или ввод пользователем команды .exit в консоль) программа выводит в консоль следующий текст Thank you for using File Manager, Username, goodbye!

// //TODO При запуске программы и после каждого завершения ввода/операции текущий рабочий каталог должен выводиться следующим образом: You are currently in path_to_working_directory

// //TODO В случае неизвестной операции или неверного ввода (отсутствуют обязательные аргументы, неверные данные в аргументах и ​​т. д.) должно отображаться сообщение о недопустимом вводе, и пользователь должен иметь возможность ввести другую команду.

// //TODO В случае ошибки во время выполнения операции должно быть показано сообщение «Операция не удалась», и пользователь должен иметь возможность ввести другую команду (например, попытка выполнить операцию с несуществующим файлом или работать с несуществующим путем должна привести к сбою операции). )

// //TODO Пользователь не может перейти выше корневого каталога (например, в Windows это текущий корень локального диска). Если пользователь попытается это сделать, текущий рабочий каталог не изменится.
