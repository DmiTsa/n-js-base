import { readdir } from 'node:fs/promises';
import fs from 'node:fs';

async function list(path) {
  const files = await readdir(path);
  // console.log(files);

  // console.log(`File list (${fullPath}) :`);
  const res = files.map((el) => {
    // console.log(stats.isFile(el));

    return { name: el };
  });
  // console.log(res);

  // console.log(Stats('c:\\Users'));
  console.log(fs.stat('c:\\Users'));
}

await list('c:\\Users');
// console.log(stat());

// var fs = require("fs");

// fs.stat("filename.txt", function(err, stats) {
//     if (stats.isFile()) {
//         console.log("Файл не является папкой");
//     } else {
//         console.log("Файл является папкой");
//     }
// });
