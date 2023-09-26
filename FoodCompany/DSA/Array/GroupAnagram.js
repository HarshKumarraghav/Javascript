String.prototype.stringSort = function () {
  return this.split("").sort().join("");
};
var groupAnagrams = function (strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].stringSort();
    if (sortedStr in map) {
      map[sortedStr].push(strs[i]);
    } else {
      map[sortedStr] = [strs[i]];
    }
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
