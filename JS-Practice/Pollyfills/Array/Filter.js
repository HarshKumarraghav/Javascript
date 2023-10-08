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

const filterArr = arr.filter((item) => item.age >= 65);
console.log(filterArr);

Array.prototype.MyFilter = function (fn) {
  if (!Array.isArray(this))
    throw new TypeError(`${this}.MyFilter is not a valid function`);
  if (typeof fn !== "function")
    throw new TypeError(`${fn}.MyFilter is not a valid function`);
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
const myfilter = arr.MyFilter((item) => item.age >= 65);
console.log(myfilter);
