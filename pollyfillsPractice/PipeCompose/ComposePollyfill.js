const Add2 = (num) => num + 2;
const Sub30 = (num) => num - 30;
const MultipleBy5 = (num) => num * 5;
const GivePositiveOutput = (num) => Math.abs(num);

const compose =
  (...fns) =>
  (input) =>
    fns.reduceRight((currentValue, func) => func(currentValue), input);
