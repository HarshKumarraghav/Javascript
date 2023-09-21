const arr = [1, 2, 3, [1, 2, [2, 3]]];

const flattenArr = arr.flat(4);

console.log(flattenArr);

Array.prototype.MyFlat = function (depth = 1) {
  const result = [];
  if (!Array.isArray(this))
    throw new TypeError(`${this}.myFlat is not a function`);
  this.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      result.push(...element.MyFlat(depth - 1));
    } else {
      result.push(element);
    }
  });
  return result;
};

const flattenArray = arr.MyFlat(4);

console.log(flattenArray);
