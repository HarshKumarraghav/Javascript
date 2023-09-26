var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return true;
};
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
