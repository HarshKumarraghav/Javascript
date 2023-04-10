let arr = [1, 2, 3, 4, 5];
function SwapArray(arr, i) {
  let length = arr.length;
  if (i >= length - i - 1) {
    return;
  }
  var t = arr[i];
  arr[i] = arr[length - i - 1];
  arr[length - i - 1] = t;
  SwapArray(arr, i + 1);
  return arr;
}
let result = SwapArray(arr, 0);
console.log(result);
