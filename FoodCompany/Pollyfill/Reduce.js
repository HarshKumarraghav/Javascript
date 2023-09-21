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

const reducedArray = arr.reduce((acc, curr) => {
  return acc + curr.age;
}, 0);

console.log(reducedArray);

Array.prototype.myReduce = function (cf, initialValue) {
  if (!Array.isArray(this))
    throw new TypeError(`${this}.myReduce is not a function`);
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = cf(acc, this[i], i, this);
  }
  return acc;
};
const MyReducedArray = arr.reduce((acc, curr) => {
  return acc + curr.age;
}, 0);

console.log(MyReducedArray);
