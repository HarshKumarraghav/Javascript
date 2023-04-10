function Factorial(n) {
  if (n <= 0) {
    return 1;
  }
  return n * Factorial(n - 1);
}
let n = 7;
let result = Factorial(n);
console.log(result);
