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

arr.forEach((item) => console.log("age * 2", item.age * 2));

Array.prototype.MyForEach = function (fn) {
  if (!Array.isArray(this))
    throw new TypeError(`${this}.MyForEach is not a function`);
  if (typeof fn !== "function")
    throw new TypeError(`${fn} is not a valid function`);
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};

arr.MyForEach((item) => console.log("age * 3", item.age * 3));
