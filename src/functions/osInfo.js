import { cpus, arch, homedir, userInfo, EOL } from 'os';

function osInfo(com) {
  switch (com[1]) {
    case '--EOL':
      console.log(`System EOL(s):`);
      console.log([...EOL]);
      break;
    case '--cpus':
      printCpusInfo();
      break;
    case '--homedir':
      console.log(`Home directory this PC: ${homedir()}`);
      break;
    case '--username':
      const userName = userInfo().username;
      console.log(`Current user this PC: ${userName}`);
      break;
    case '--architecture':
      console.log(`Architecture this PC: ${arch()}`);
      break;
    default:
      console.log(`argument error: ${com[1]} is not defined`);
  }
}

export default osInfo;

//functions
function printCpusInfo() {
  const cpusAll = cpus();
  const cpusInfo = cpusAll.map((el, i) => {
    return { model: el.model, speed: el.speed };
  });
  console.log(`CPU information:`);
  console.log(`Threads: ${cpusAll.length}`);

  console.table(cpusInfo);
}
