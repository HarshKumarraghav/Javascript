const Add2 = (num) => num + 2;
const Sub12 = (num) => num - 12;
const Multiply30 = (num) => num * 30;
const MakePositive = (num) => Math.abs(num);

const Pipe =
  (...fns) =>
  (input) =>
    fns.reduce((curr, func) => func(curr), input);

const result = Pipe(Add2, Sub12, Multiply30, MakePositive)(8);

console.log(result);
