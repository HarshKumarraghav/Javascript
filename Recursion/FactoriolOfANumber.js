/**
 * The function calculates the factorial of a given number using recursion.
 * @param n - The input parameter for the Factorial function, which represents the number for which we
 * want to calculate the factorial.
 * @returns the factorial of the input number 'n'.
 */
function Factorial(n) {
  if (n <= 0) {
    return 1;
  }
  return n * Factorial(n - 1);
}
let n = 7;
let result = Factorial(n);
console.log(result);
