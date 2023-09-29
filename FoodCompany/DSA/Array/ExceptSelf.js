function productExceptSelf(nums) {
  const n = nums.length;
  const result = [];
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = n - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }
  return result;
}
const nums = [1, 2, 3, 4];



const result = productExceptSelf(nums);

console.log(result);
