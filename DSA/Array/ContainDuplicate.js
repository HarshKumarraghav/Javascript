/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const sortedNumber = nums.sort();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (sortedNumber[i] === sortedNumber[i + 1]) return true;
  }
  return false;
};
const nums = [1, 2, 3, 4];
const result = containsDuplicate(nums);
console.log(result);
