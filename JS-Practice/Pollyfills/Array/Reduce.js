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

const ageReduce = arr.reduce((prev, curr) => {
  return prev + curr.age;
}, 0);

console.log(ageReduce);

Array.prototype.MyReduce = function (fn) {
  if (!Array.isArray(this))
    throw new TypeError(`${this}.MyFilter is not a valid function`);
  if (typeof fn !== "function")
    throw new TypeError(`${fn}.MyFilter is not a valid function`);
  console.log(arguments);
  let acc = 0;
  for (let i = 0; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};
const ageMYReduce = arr.MyReduce((prev, curr) => {
  return prev + curr.age;
}, 0);

console.log(ageMYReduce);
