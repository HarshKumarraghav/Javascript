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

const filterArray = arr.filter((item) => item.age >= 46);

console.log(filterArray);

Array.prototype.myFilter = function (cf) {
  if (!Array.isArray(this))
    throw new TypeError(`${this}.myFilter is not a function`);
  if (typeof cf !== "function")
    throw new TypeError(`${cf} is not a valid function`);
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (cf(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};
const myFilterArray = arr.filter((item) => item.age >= 46);

console.log(myFilterArray);
