String.prototype.stringSort = function () {
  return this.split("").sort().join("");
};
function validAnagram(s, t) {
  const S = s.stringSort();
  const T = t.stringSort();
  console.log(S, T);
  if (S.length !== T.length) return false;
  for (let i = 0; i < T.length; i++) {
    if (S[i] !== T[i]) return false;
  }
  return true;
}
const s = "anagram";
const t = "nagaram";

console.log(validAnagram(s, t));
