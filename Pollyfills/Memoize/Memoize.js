const Add = (num1, num2) => {
  return num1 + num2;
};
const multiply = (num1, num2, num3) => {
  return num1 * num2 * num3;
};
const GenrateUniqueId = (fn, ...args) => {
  const uniqueId = [];
  uniqueId.push(fn.name, ...args);
  const uuid = uniqueId.join("|");

  return uuid;
};
const Memoize = (fn) => {
  if (typeof fn !== "function") {
    throw new TypeError("not a valid function");
  }
  const cache = {};
  return function (...args) {
    let argString = GenrateUniqueId(fn, ...args);
    if (argString in cache) {
      return cache[argString];
    } else {
      const result = fn(...args);
      cache[argString] = result;
      return result;
    }
  };
};

const memoizeMultiply = Memoize(multiply);
console.time();
console.log(memoizeMultiply(2, 3, 4));
console.timeEnd();
console.time();
console.log(memoizeMultiply(2, 3, 4));
console.timeEnd();
console.time();
console.log(memoizeMultiply(2, 3, 4));
console.timeEnd();
