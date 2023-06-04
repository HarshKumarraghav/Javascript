var subsets = function (nums) {
  let arr = [];
  let result = [];
  function subsetsChecker(nums, i, arr) {
    let length = nums.length;

    if (i === length) {
      result.push(arr);
      return;
    }
    subsetsChecker(nums, i + 1, [...arr, nums[i]]);
    subsetsChecker(nums, i + 1, arr);
  }
  subsetsChecker(nums, 0, arr);
  return result;
};
let ans = subsets([1, 2, 3]);
console.log(ans);
