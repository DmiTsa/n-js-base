let n = 1;

const at = Array.apply(null, { length: 4 }).map(() => {
  return (n = n + 1);
});

console.log(at);
