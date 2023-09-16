const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log(arr.flat(4));

Array.prototype.myFlat = function (depth = 1) {
  const output = [];
  if (!Array.isArray(this))
    throw new TypeError(`${this}.flat is not a function`);
  this.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      output.push(...element.myFlat(depth - 1));
    } else {
      output.push(element);
    }
  });
  return output;
};
console.log("Myflat", arr.myFlat(4));
