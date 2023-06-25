/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  let i = 0;
  let j = 1;
  while (i < nums.length) {
    if (nums[i] === nums[j]) {
      return true;
    } else {
      j++;
      if (j === nums.length) {
        i++;
        j = i + 1;
      }
    }
  }
  return false;
};
const nums = [1, 2, 3, 1].sort();
console.log(nums);
const result = containsDuplicate(nums);
console.log(result);
