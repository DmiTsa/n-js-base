import { exit } from 'process';

function killProcess() {
  // process.on('beforeExit', () => {
  //   console.log('before Exit');
  // });
  process.kill(process.pid);
  // exit(0);
}
export default killProcess;

// process.on('SIGTERM', () => {
// 	console.log('before Exit');
//  });
//  process.on('exit', () => {});