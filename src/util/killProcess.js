import { exit } from 'process';
import getArgValue from './getArgValue.js';

function killProcess() {
  // process.on('beforeExit', () => {
  //   console.log('before Exit');
  // });
  // process.kill(process.pid);
  const args = process.argv;
  const username = getArgValue(args, '--username=');
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);

  exit();
}
export default killProcess;

// process.on('SIGTERM', () => {
// 	console.log('before Exit');
//  });
//  process.on('exit', () => {});
