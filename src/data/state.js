import { homedir } from 'os';
import getArgValue from '../util/getArgValue.js';

const args = process.argv;
const username = getArgValue(args, '--username=');
const homePath = homedir();

const state = {
  homePath,
  currentPath: homePath,
  username,
};

export default state;
