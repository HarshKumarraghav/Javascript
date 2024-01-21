/**
 * LogAtLeast5 logs at least 5 numbers, starting with 1, but will log more if a larger number is passed
 * in.
 * @param n - the number of times to log
 */
function LogAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
LogAtLeast5(15);
