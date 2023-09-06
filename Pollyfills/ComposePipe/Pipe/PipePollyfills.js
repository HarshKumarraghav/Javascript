// function Pipe is concept in functional programing to execute more than one function in give order...

const Add2 = (num) => num + 2;
const Sub30 = (num) => num - 30;
const MultipleBy5 = (num) => num * 5;
const GivePositiveOutput = (num) => Math.abs(num);

const pipe =
  (...fn) =>
  (input) =>
    fn.reduce((currentValue, func) => func(currentValue), input);

const PipeFunc = pipe(Add2, Sub30, MultipleBy5, GivePositiveOutput)(6);
console.log(PipeFunc);
