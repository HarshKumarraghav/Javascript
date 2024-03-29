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

const TotalAge = arr.reduce((acc, cur) => acc + cur.age, 0);
console.log("TotalAge", TotalAge);

Array.prototype.myReduce = function (cb, initialValue) {
  if (!Array.isArray(this)) throw new TypeError(`${this} is not a valid array`);
  if (typeof cb !== "function") throw new TypeError("Not a valid function");
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};
const thTotalAge = arr.myReduce((acc, cur) => acc + cur.age, 0);
console.log("thTotalAge", thTotalAge);
