/**
 * AddUpTo1 adds up all the numbers from 1 to n.
 * @param n - 10
 * @returns 55
 */
function AddUpTo1(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
AddUpTo1(10);
