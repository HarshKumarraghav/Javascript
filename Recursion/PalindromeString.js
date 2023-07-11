function palindrome(s, i) {
  const n = s.length;
  if (i >= n / 2) return true;
  if (s[i] !== s[n - i - 1]) return false;
  return palindrome(s, i + 1);
}
let s = "madam";
const result = palindrome(s, 0);
console.log(result);
