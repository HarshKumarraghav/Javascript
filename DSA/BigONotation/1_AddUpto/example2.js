/**
 * AddUpTo2 takes in a number n and returns the sum of all numbers from 1 to n.
 * @param n - the number we want to add up to
 * @returns the total of the sum of all the numbers from 1 to n.
 */
function AddUpTo2(n) {
  let total;
  total = (n * (n + 1)) / 2;
  return total;
}
AddUpTo2(10);
