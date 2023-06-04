/**
 * This is a recursive function that checks if a given string is a palindrome.
 * @param s - The input string that we want to check if it is a palindrome or not.
 * @param i - The parameter "i" in the function "palindrome" represents the index of the character
 * being compared in the string "s". It starts at 0 and increments by 1 recursively until it reaches
 * the middle of the string.
 * @returns a boolean value - true if the input string is a palindrome (reads the same forwards and
 * backwards), and false otherwise.
 */
function palindrome(s, i) {
  let length = s.length;
  if (i >= length / 2) {
    return true;
  }
  if (s[i] != s[length - i - 1]) {
    return false;
  }
  return palindrome(s, i + 1);
}
let s = "madam";
const result = palindrome(s, 0);
console.log(result);
