/**
 * The function calculates the power of a given number using recursion.
 * @param x - The base number that will be raised to the power of n.
 * @param n - The parameter "n" represents the exponent in a power function, indicating the number of
 * times the base (parameter "x") is multiplied by itself.
 * @returns the result of raising the number `x` to the power of `n`.
 */
function power(x, n) {
  if (n < 0) {
    return 1 / power(x, -n);
  }
  if (n < 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }

  let ans = power(x, n - 1);
  return x * ans;
}

let ans = power(2, -2);
console.log(ans);
