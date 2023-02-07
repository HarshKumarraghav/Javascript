function anagramcheck(str1, str2) {
  let lookup = {};
  if (str1.length <= 0) {
    return false;
  } else if (str1.length != str2.length) {
    return false;
  } else {
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      if (lookup[letter]) {
        lookup[letter] += 1;
      } else {
        lookup[letter] = 1;
      }
    }
    for (let j = 0; j < str2.length; j++) {
      let letter = str2[j];
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
    return true;
  }
}

anagramcheck("caassssr", "raassssc");
