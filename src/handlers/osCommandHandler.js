import { cpus, arch } from 'os';

function osCommandHandler(com) {
  switch (com[1]) {
    case '--EOL':
      null;
      break;
    case '--cpus':
      console.log(cpus());
      break;
    case '--homedir':
      null;
      break;
    case '--username':
      null;
      break;
    case '--architecture':
      console.log(arch());
      break;
    default:
      console.log(`argument error: ${com[1]} is not defined`);
  }
  //['os', '--cpus']
}

export default osCommandHandler;

// os --EOL > Получите EOL (системный End-Of-Line по умолчанию) и распечатайте его на консоли

// os --cpus > Получите информацию о процессорах хост-машины (общее количество процессоров плюс модель и тактовая частота (в ГГц) для каждого из них) и распечатайте ее на консоли.

// os --homedir > Получить домашний каталог и вывести его на консоль

// os --username > Получить текущее системное имя пользователя (не путать с именем пользователя, которое задается при запуске приложения) и вывести его на консоль

// os --architecture > Получите архитектуру ЦП, для которой скомпилирован двоичный файл Node.js, и распечатайте его на консоли.
