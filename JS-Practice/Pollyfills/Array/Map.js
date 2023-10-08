const arr = [
  { name: "John", age: 25 },
  { name: "Andrew", age: 43 },
  { name: "Peter", age: 81 },
  { name: "Hanna", age: 24 },
  { name: "Adam", age: 65 },
  { name: "Zack", age: 46 },
  { name: "Bob", age: 72 },
  { name: "Ella", age: 18 },
  { name: "Tom", age: 33 },
  { name: "Alex", age: 55 },
];

const arrMap = arr.map((item) => item.age * 2);
console.log(arrMap);

Array.prototype.MyMap = function (fn) {
  if (!Array.isArray(this))
    throw new TypeError(`${this}.MyFilter is not a valid function`);
  if (typeof fn !== "function")
    throw new TypeError(`${fn}.MyFilter is not a valid function`);
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
};
const arrMyMap = arr.MyMap((item) => item.age * 2);
console.log(arrMyMap);
