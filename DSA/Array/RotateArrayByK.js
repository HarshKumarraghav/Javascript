let nums1 = [1, 2, 3, 4, 5, 6, 7];
let num2 = [-1, -100, 3, 99];

let k1 = 3;
let k2 = 2;

const RotateArray = (val, k) => {
  const length = val.length;

  if (k > length) {
    k = k % length;
  }

  const rotatedVal = val.splice(length - k, length);
  val.unshift(...rotatedVal);
  return val;
};

console.log(RotateArray(nums1, k1));
