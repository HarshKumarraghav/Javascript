function RemoveDuplicatesfromSortedArray(nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums;
}
console.log(RemoveDuplicatesfromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
