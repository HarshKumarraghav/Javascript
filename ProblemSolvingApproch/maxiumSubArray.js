var maxSubArray = function (nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    //checking combine value and without combine
    console.log("val", (nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])));
    console.log("sum", (sum = Math.max(nums[i], sum)));
  }
  console.log(sum);
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
