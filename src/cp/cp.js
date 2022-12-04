import { spawn } from 'node:child_process';
import getPath from '../fs/getPath.js';

const spawnChildProcess = async (args) => {
  const pathCPFile = getPath('/files', 'script.js');
  const spawnProc = spawn('node', [pathCPFile]);

  process.stdin.on('data', () => {
    spawnProc.stdout.pipe(process.stdin);
    spawnProc.stdin.pipe(process.stdout);
  });
};

spawnChildProcess();
