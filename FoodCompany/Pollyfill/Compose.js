const Add2 = (num) => num + 2;

const Sub30 = (num) => num - 30;

const Multiply10 = (num) => num * 10;

const IsPositive = (num) => Math.abs(num);

const result = IsPositive(Multiply10(Sub30(Add2(10))));

console.log("result", result);

const compose =
  (...fns) =>
  (input) =>
    fns.reduceRight((curr, func) => func(curr), input);

const res = compose(IsPositive, Multiply10, Sub30, Add2)(10);

console.log("res", res);
