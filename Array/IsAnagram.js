var isAnagram = function (s, t) {
  let obj = {};
  if (s.length <= 0 || t.length <= 0) {
    return false;
  } else if (s.length != t.length) {
    return false;
  } else {
    for (let i = 0; i < s.length; i++) {
      let letter = s[i];
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
    for (let i = 0; i < t.length; i++) {
      let letter = t[i];
      if (!obj[letter]) {
        return false;
      } else {
        obj[letter] -= 1;
      }
    }
    return true;
  }
};
