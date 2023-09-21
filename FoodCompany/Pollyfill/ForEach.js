const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((elm) => console.log(`${elm}*2`, elm * 2));

Array.prototype.myForEach = function (cf) {
  if (!Array.isArray(this))
    throw new TypeError(`${this}.myForEach is not a function.`);
  if (typeof cf !== "function") throw new TypeError(`${cf} is not a function.`);
  for (let i = 0; i < this.length; i++) {
    cf(this[i]);
  }
};

arr.myForEach((elm) => console.log(`MyForEach ${elm}*2`, elm * 2));
