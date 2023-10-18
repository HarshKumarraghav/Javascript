const Arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const flatenArray = Arr.flat(5);

console.log(flatenArray);

Array.prototype.MyFlat = function (depth = 1) {
  if (!Array.isArray(this))
    throw new TypeError(`${this}.MyFlat is  not a function`);

  const output = [];
  this.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      output.push(...element.MyFlat(depth - 1));
    } else {
      output.push(element);
    }
  });
  return output;
};
const MyflatenArray = Arr.MyFlat(5);

console.log(MyflatenArray);
