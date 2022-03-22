function smallestString(n, k) {
  let charArray = [];
  let str = '';
  for (let i = 1; i <= 26; i++) {
    charArray[i] = String.fromCharCode(96 + i);
  }

  for (let j = n; j > 0; j--) {
    let val = k - (i - 1);

    if (val >= 26) {
      str = charArray[26] + str;
      k = k - 26;
    } else {
      str = charArray[val] + str;
      k = k - val;
    }
  }

  return str;
}

//driver code

console.log(smallestString(3, 27));
