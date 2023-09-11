const Add2 = (num) => num + 2;
const Sub30 = (num) => num - 30;
const MultipleBy5 = (num) => num * 5;
const GivePositiveOutput = (num) => Math.abs(num);

const pipe =
  (...fns) =>
  (input) =>
    fns.reduce((currentVal, func) => func(currentVal), input);

pipe(Add2, Sub30, MultipleBy5, GivePositiveOutput)(6);
