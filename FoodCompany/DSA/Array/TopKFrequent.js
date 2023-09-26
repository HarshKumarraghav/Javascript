var topKFrequent = function (nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  const arr = Object.entries(map);
  arr.sort((a, b) => b[1] - a[1]);
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }
  return res;
};
let nums = [1, 1, 1, 2, 2, 3];
let k = 2;

console.log(topKFrequent(nums, k));
