const Arr = [2, 1, 4, 5];
const newArr = Arr.map((val, i, Arr) => val * 2);
console.log("newArr", newArr);

Array.prototype.myMap = function (cb) {
  if (!Array.isArray(this)) throw new TypeError(`${this} is not a valid array`);
  if (typeof cb !== "function") throw new TypeError("Not a valid function");
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const myARR = Arr.myMap((val, i, Arr) => val * 2);
console.log("myARR", myARR);
