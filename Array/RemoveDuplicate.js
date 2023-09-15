// will remove duplicate from array without creating new array
let arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // [0, 1, 2, 3, 4]
let arr2 = [1, 1, 2]; // [1, 2]
let arr3 = [1, 2, 3]; // [1, 2, 3]

const removeDuplicate = (val) => {
  if (val.length === 0) return 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] === val[i + 1]) {
      val.splice(i + 1, 1);
      i--;
    }
  }
  return val.length;
};
console.log(removeDuplicate(arr1));

/**
 * The function `revomeDuplicateOptimised` removes duplicate elements from an array and returns the
 * length of the modified array.
 * @param val - The parameter `val` is an array of values.
 * @returns the length of the array after removing duplicate elements.
 */
const revomeDuplicateOptimised = (val) => {
  if (val.length === 0) return 0;
  let j = 0;
  for (let i = 1; i < val.length; i++) {
    if (val[j] !== val[i]) {
      j++;
      val[j] = val[i];
    }
  }
  return j + 1;
};

console.log(revomeDuplicateOptimised(arr1));
