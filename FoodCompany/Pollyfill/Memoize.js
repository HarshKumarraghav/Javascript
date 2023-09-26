const add = (n1, n2) => {
  return n1 + n2;
};
const multiply = (n1, n2, n3) => {
  return n1 * n2 * n3;
};
const GenrateUniqueId = (fn, ...args) => {
  const uniqueId = [];
  uniqueId.push(fn.name, ...args);
  const id = uniqueId.join("|");
  return id;
};
const memoize = (fn) => {
  if (typeof fn !== "function")
    throw new TypeError(`${fn}, not a valid function`);
  const cache = {};
  return function (...args) {
    const argsString = GenrateUniqueId(fn, ...args);
    if (argsString in cache) {
      return cache[argsString];
    } else {
      const result = fn(...args);
      cache[argsString] = result;
      return result;
    }
  };
};

const memoizeAdd = memoize(add);
const memoizeMultiply = memoize(multiply);
// Add
console.time();
memoizeAdd(3, 3);
console.timeEnd();
console.time();
memoizeAdd(3, 3);
console.timeEnd();
console.time();
memoizeAdd(3, 3);
console.timeEnd();
// Multiply
console.time();
memoizeMultiply(3, 3, 1);
console.timeEnd();
console.time();
memoizeMultiply(3, 3, 1);
console.timeEnd();
console.time();
memoizeMultiply(3, 3, 1);
console.timeEnd();
