const twosum = (nums, target) => {
  const n = nums.length;
  const map = {};
  for (let i = 0; i < n; i++) {
    let num1 = nums[i];
    let nums2 = target - num1;
    if (nums2 in map) {
      return [map[nums2], i];
    }
    map[num1] = i;
  }
};

console.log(twosum([2, 7, 11, 15], 9));
