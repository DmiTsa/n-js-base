import isAvailable from './util/isAvailable.js';

const path = '../../tr.txt';
// const path = 'C:\\Users\\dmitr\\n-js-base\\tr.txt'; C:\Users\dmitr\n-js-base\ ..//tr.txt
let res;

res = await isAvailable(path);

console.log(path);

console.log(res);

const currentPath = 'C:\\Users\\dmitr\\n-js-base';
// destination 'C:\\Users\\dmitr\\n-js-base\\tmp\\cli';
//зададим - tmp\\cli

//функция на вход принимает путь пользователя и currentPath
// определяет абсолютный путь или относительный
// если абсолютный - возвращает
// если относительный совмещает с currentPath и возврвщает
