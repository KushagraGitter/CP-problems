/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    total += helper(i, i, s);
    total += helper(i, i + 1, s);
  }

  return total;
}

function helper(left, right, s) {
  let count = 0;
  while (left > -1 && right < s.length && s[left] === s[right]) {
    count++;
    left--;
    right++;
  }

  return count;
}
