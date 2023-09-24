const Add = (num1, num2) => {
  return num1 + num2;
};
const multiply = (num1, num2, num3) => {
  return num1 * num2 * num3;
};
const GenrateUniqueId = (fn, ...args) => {
  const id = [];
  id.push(fn.name, ...args);
  const uniqueId = id.join("|");
  return uniqueId;
};
const Memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const argString = GenrateUniqueId(fn, ...args);
    if (argString in cache) {
      console.log("cache value");
      return cache[argString];
    } else {
      console.log("not cache value");
      const result = fn(...args);
      cache[argString] = result;
      return result;
    }
  };
};

const memoizeMultiply = Memoize(multiply);
const memoizeAdd = Memoize(Add);
console.time();
console.log(memoizeMultiply(2, 3, 4));
console.timeEnd();
console.time();
console.log(memoizeMultiply(2, 3, 4));
console.timeEnd();
console.time();
console.log(memoizeAdd(2, 3));
console.timeEnd();
console.time();
console.log(memoizeAdd(2, 3));
console.timeEnd();