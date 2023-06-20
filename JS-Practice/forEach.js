const arr = [2, 5, 1, 4, 10, 3, 6, 8, 7, 9];
/* The code is using the `forEach` method to iterate over each element in the `arr` array and log the
result of multiplying each element by 2 and its index to the console. */
// arr.forEach((item, index) => {
//   console.log(item * 2, index);
// });

/* The commented out code is using the `map` method to iterate over each element in the `arr` array and
log the result of multiplying each element by 2 and its index to the console. However, since the
code is commented out, it will not be executed. */
// arr.map((item, index) => {
//   console.log(item * 2, index);
// });

const even = arr.filter((item, i) => {
  return item % 2 === 0;
});

console.log(even);

const sortedarr = arr.sort((a, b) => a - b);
console.log(sortedarr);

const reduceval = arr.reduce((acc, current) => {
  return acc + current;
});
console.log(reduceval);
