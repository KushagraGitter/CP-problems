function partitionLabels(s) {
  let result = [];
  let last_idx = new Array(26).fill(0);

  // we created the last index array for all char in the string
  for (let i = 0; i < s.length; i++) {
    last_idx[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
  }

  //now we can intereate through the string and find the last idx of the char
  // if last char is queal to i then we add that to our result
  let start = 0;
  let end = 0;
  for (let j = 0; j < s.length; j++) {
    end = Math.max(end, last_idx[s[j].charCodeAt(0) - 'a'.charCodeAt(0)]);

    if (j === end) {
      result.push(j - start + 1);
      start = j + 1;
    }
  }

  return result;
}

//driver code

console.log(partitionLabels('ababcbacadefegdehijhklij'));
console.log(partitionLabels('eccbbbbdec'));
