import { exit } from 'process';
import state from '../data/state.js';

function killProcess() {
  const { username } = state;
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);

  exit();
}
export default killProcess;
