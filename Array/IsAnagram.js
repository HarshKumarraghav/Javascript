String.prototype.sortStrings = function () {
  return this.split("").sort().join("");
};
var isAnagram = function (s, t) {
  const S = s.sortStrings();
  const T = t.sortStrings();
  for (let i = 0; i < S.length; i++) {
    if (s.length <= 0 || t.length <= 0) return false;
    else if (s.length < t.length || t.length < s.length) return false;
    if (S[i] !== T[i]) {
      return false;
    }
  }
  return true;
};

const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));
