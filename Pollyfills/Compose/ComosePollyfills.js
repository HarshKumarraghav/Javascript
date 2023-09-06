const add2 = (num) => num + 2;
const sub1 = (num) => num - 1;
const multipleBy5 = (num) => num * 5;
const GivePositiveOutput = (num) => Math.abs(num);

const result = GivePositiveOutput(multipleBy5(sub1(add2(6))));
