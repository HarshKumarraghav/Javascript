const arr1 = [12, 35, 1, 10, 34, 1];
const arr2 = [10, 5, 10];

const secondLargest = (arr) => {
  const uniqueObject = new Set(arr);
  const uniqueArray = Array.from(uniqueObject).sort((a, b) => b - a);
  if (!uniqueArray.length < 1) {
    return uniqueArray[1];
  } else {
    return -1;
  }
};
// Ologn
console.log(secondLargest(arr2));

const secondLargestOptimise = (arr) => {
  let LARGEST = Number.NEGATIVE_INFINITY;
  let SECOND_LARGEST = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > LARGEST) {
      SECOND_LARGEST = LARGEST;
      LARGEST = arr[i];
    } else if (arr[i] != LARGEST && arr1[i] > SECOND_LARGEST) {
      SECOND_LARGEST = arr[i];
    }
  }
  return SECOND_LARGEST;
};
console.log(secondLargestOptimise(arr1));
