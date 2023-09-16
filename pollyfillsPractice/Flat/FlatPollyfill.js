const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log(arr.flat());
Array.prototype.myFlat = function (depth = 1) {
  const result = [];
  if (!Array.isArray(this))
    throw new TypeError(`${this}.flat is not a function`);
  this.forEach((Element) => {
    if (Array.isArray(Element) && depth > 0) {
      result.push(...Element.myFlat(depth - 1));
    } else {
      result.push(Element);
    }
  });
  return result;
};
console.log("Myflat", arr.myFlat());
