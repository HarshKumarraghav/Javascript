String.prototype.SortString = function () {
  return this.split("").sort().join();
};
var isAnagram = function (s, t) {
  const S = s.SortString();
  const T = t.SortString();
  for (let i = 0; i < S.length; i++) {
    if (S.length < T.length || S.length > T.length) return flase;
    if (S[i] !== T[i]) return flase;
  }
  return true;
};

const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));
