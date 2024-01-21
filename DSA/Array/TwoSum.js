function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;

    if (map.has(num2)) return [map.get(num2), i];
    map.set(num1, i);
  }
}

const nums = [2, 7, 11, 15],
  target = 13;

console.log("Two Sum", twoSum(nums, target));
