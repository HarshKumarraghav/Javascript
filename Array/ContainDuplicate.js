/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};
const nums = [1, 2, 3, 1].sort();
const result = containsDuplicate(nums);
console.log(result);
