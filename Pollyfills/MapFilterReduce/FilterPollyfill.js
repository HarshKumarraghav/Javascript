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

const filterData = arr.filter((val) => val.age >= 50);
console.log("filterData", filterData);

Array.prototype.myFilter = function (cb) {
  if (!Array.isArray(this))
    throw new TypeError(`${this} is not a vailed array`);
  if (typeof cb !== "function") throw new TypeError("not a valid function");

  const temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
const MyFilterData = arr.myFilter((val) => val.age >= 50);
console.log("MyFilterData", MyFilterData);
