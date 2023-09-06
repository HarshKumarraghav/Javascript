// function composing is concept in functional programing to execute more than one function in give order...

const add2 = (num) => num + 2;
const sub1 = (num) => num - 30;
const multipleBy5 = (num) => num * 5;
const givePositiveOutput = (num) => Math.abs(num);

const result = givePositiveOutput(multipleBy5(sub1(add2(6))));

console.log(result);

const compose =
  (...fn) =>
  (input) =>
    fn.reduceRight((currentValue, func) => func(currentValue), input);

const composeFunc = compose(givePositiveOutput, multipleBy5, sub1, add2)(6);
console.log(composeFunc);
