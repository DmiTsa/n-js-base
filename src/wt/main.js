import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import getPath from './getPath.js';

const performCalculations = async () => {
  const nthCpus = cpus().length;
  const path = getPath('', 'worker.js');

  async function runWorker(wd) {
    const worker = new Worker(path, { workerData: wd });

    return new Promise((resolve, reject) => {
      worker.on('message', (message) => resolve({ value: message }));
      worker.on('error', (message) => reject(message));
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  }

  const results = await Promise.allSettled(
    Array.apply(null, { length: nthCpus }).map((el) => {
      el = runWorker(10);
    })
  );

  console.log(results);

  // console.log(await runWorker(10));
  // console.log(result);
};

await performCalculations();

// worker.js — расширить данную функцию для работы с данными, полученными из основного потока, и реализовать функцию, которая отправляет результат вычислений в основной поток.

// main.js - реализовать функцию, которая создает количество рабочих потоков (равное количеству логических ядер процессора хост-машины) из файла worker.js и способная отправлять данные в эти потоки и получать от них результат вычислений.

// Вы должны отправить возрастающий номер, начиная с 10, каждому работнику. Например: на хост-машине с 4 ядрами вы должны создать 4 воркера и отправить 10 на первый воркер, 11 на второй воркер, 12 на третий воркер, 13 на четвертый воркер.
// После того, как все воркеры закончат работу, функция должна выводить массив результатов в консоль.

// Результатом является массив объектов с двумя свойствами:
// статус - "resolved" в случае успешного получения значения от воркера или "error" в случае ошибки в воркере data - значение из воркера в случае успеха или ноль в случае ошибки в воркере

// import WorkerPool from './worker_pool.js';
// import os from 'node:os';

// const pool = new WorkerPool(os.cpus().length);

// let finished = 0;
// for (let i = 0; i < 10; i++) {
//   pool.runTask({ a: 42, b: 100 }, (err, result) => {
//     console.log(i, err, result);
//     if (++finished === 10)
//       pool.close();
//   });
// }

// const result = () => {
//   return new Promise((resolve, reject) => {
//     const worker = new Worker(<функция воркер>, {
//       workerData
//     });
//     worker.on('message', resolve);
//     worker.on('error', reject);
//     worker.on('exit', (code) => {
//       if (code !== 0)
//         reject(new Error(`Worker stopped with exit code ${code}`));
//     });
//   });
// };
