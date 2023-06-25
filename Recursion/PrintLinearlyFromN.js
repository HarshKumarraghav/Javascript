/**
 * The function recursively prints a sequence of numbers from 1 to N and then back to 1.
 * @param N - The number of times the function will recursively call itself.
 * @param n - The starting number to print from.
 * @returns If N is less than or equal to 0, the function will return nothing (undefined). Otherwise,
 * the function will continue to execute recursively until N becomes less than or equal to 0.
 */
function PrintFrom1ToN(N, n) {
  if (N <= 0) {
    return;
  }
  N--;
  console.log("Printing first:", n);

  PrintFrom1ToN(N, n - 1);
  console.log("Printing last:", n);
}
let N = 10;
let n = N;
const result = PrintFrom1ToN(N, n);
