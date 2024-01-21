function productExceptSelf(nums) {
  const n = nums.length;
  const res = [];
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < n; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = n - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    res[i] *= postfix;
  }
  return res;
}

const nums = [1, 2, 3, 4];

const result = productExceptSelf(nums);

console.log(result);
