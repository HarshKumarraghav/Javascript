//  A function which take two array and check wheather the square of first array is present in second array.
let arr1 = [2, 3, 4, 5, 6, 7, 8];
let arr2 = [4, 9, 16, 25, 6, 49, 64];
/**
 * If the length of the arrays are not equal, return false. If they are equal, loop through the first
 * array and check if the square of each element is in the second array. If it is, return true. If it
 * isn't, return false.
 * @param arr1 - [1, 2, 3, 2]
 * @param arr2 - [1, 4, 9, 16, 25]
 * @returns true
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] == arr1[i] * arr1[i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
same(arr1, arr2);
