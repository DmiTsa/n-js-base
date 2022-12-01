// env.js - реализовать функцию, которая анализирует переменные окружения с префиксом RSS_ и выводит их на консоль в формате RSS_name1=value1; RSS_имя2=значение2
const parseEnv = () => {
  const envVar = process.env;
  console.log(envVar); //{ key: value, key: value}

  for (const key in envVar) {
    if (Object.hasOwnProperty.call(envVar, key)) {
      const element = envVar[key];
      console.log('aaaaa' + element);
    }
  }
  // const rssVar = envVar.reduce((ac, varObj) => {
  //   if (varObj.key === 'VSCODE_PID') {
  //     ac.push(varObj);
  //     return ac;
  //   }
  // }, []);
  // console.log(rssVar);
};

parseEnv();

// "cli-env": "npx cross-env SOME=any RSS_foo=bar RSS_bar=baz node src/cli/env.js",
//VSCODE_PID
