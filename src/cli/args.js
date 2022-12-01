const parseArgs = () => {
  const ar = process.argv;

  console.log('-----------------------');

  console.log(ar);

  // Write your code here
};

parseArgs();

// args.js — реализовать функцию, которая анализирует аргументы командной строки (данные в формате --propName value --prop2Name value2, вам не нужно его проверять) и выводит их на консоль в формате propName is value, prop2Name is value2

// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\js-app\\n-js-base\\src\\cli\\args.js',
//     '--some-arg',
//     'value1',
//     '--other',
//     '1337',
//     '--arg2',
//     '42'
//   ]
