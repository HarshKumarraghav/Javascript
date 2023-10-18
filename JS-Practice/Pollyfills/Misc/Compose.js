const Add2 = (num) => num + 2;
const Sub12 = (num) => num - 12;
const Multiply30 = (num) => num * 30;
const MakePositive = (num) => Math.abs(num);

const res = MakePositive(Multiply30(Sub12(Add2(8))));

console.log(res);

const Compose =
  (input) =>
  (...fns) =>
    fns.reduceRight((curr, func) => func(curr), input);

const result = Compose(8)(MakePositive, Multiply30, Sub12, Add2);

console.log(result);
