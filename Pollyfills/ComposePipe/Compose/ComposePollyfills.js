// function composing is concept in functional programing to execute more than one function in give order...

const Add2 = (num) => num + 2;
const Sub30 = (num) => num - 30;
const MultipleBy5 = (num) => num * 5;
const GivePositiveOutput = (num) => Math.abs(num);

const result = givePositiveOutput(multipleBy5(sub1(add2(6))));

console.log(result);

const compose =
  (...fn) =>
  (input) =>
    fn.reduceRight((currentValue, func) => func(currentValue), input);

const composeFunc = compose(GivePositiveOutput, MultipleBy5, Sub30, Add2)(6);
console.log(composeFunc);
