const arr = [1, 3, 5, 6, 7, 8];
const MappedArray = arr.map((item) => item * 2);
console.log(MappedArray);

Array.prototype.myMap = function (cf) {
  if (!Array.isArray(this))
    throw new TypeError(`${this}.myMap is not a function`);
  if (typeof cf !== "function")
    throw new TypeError(`${cf} not a valid function`);

  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cf(this[i], i, this));
  }
  return output;
};
const myMappedArray = arr.myMap((item) => item * 2);
console.log(myMappedArray);
