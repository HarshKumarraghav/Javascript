const Add = (num1, num2) => {
  return num1 + num2;
};
const multiply = (num1, num2, num3) => {
  return num1 * num2 * num3;
};
const GenrateUniqueId = (name, ...args) => {
  const uniqueId = [];
  uniqueId.push(name, ...args);
  const uuid = uniqueId.join("|");
  return uuid;
};

const Memoize = (func) => {
  if (typeof func !== "function") throw new TypeError("not a valid argument");
  const cache = {};
  const memo = (...args) => {
    const uniqueId = GenrateUniqueId(func.name, ...args);
    if (uniqueId in cache) {
      return cache[uniqueId];
    } else {
      const result = func(...args);
      cache[uniqueId] = result;
      return result;
    }
  };
  return memo;
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
