function getArgValue(args, argName) {
  let value;
  args.forEach((el) => {
    if (el.startsWith(argName)) {
      value = el.slice(argName.length, el.length);
    }
  });
  return value;
}

export default getArgValue;
