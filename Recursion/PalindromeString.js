let s = "madam";
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
const result = palindrome(s, 0);
console.log(result);
