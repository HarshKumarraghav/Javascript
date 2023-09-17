let arr = [1, 2, 3, 4, 5];
arr.forEach((element) => console.log(element * 2));
Array.prototype.myForEach = function (cf) {
  if (!Array.isArray(this))
    throw new TypeError(`${this}.myForEach is not a valid function`);

  for (let i = 0; i < this.length; i++) {
    cf(this[i]);
  }
};
arr.myForEach((element) => console.log("myForEach", element * 2));
