const rArr = [1, 5, 7, 2, 4, 10, 5];
const Merge = (arr, low, mid, high) => {
  let left = low;
  let right = mid + 1;
  let temp = [];
  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
  return arr;
};

const MergeSort = (arr, low, high) => {
  if (low >= high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  MergeSort(arr, low, mid);
  MergeSort(arr, mid + 1, high);
  return Merge(arr, low, mid, high);
};
let length = rArr.length;
const result = MergeSort(rArr, 0, length - 1);
console.log("result", result);
