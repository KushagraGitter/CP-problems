/**
 * @param {string} s
 * @return {string}
 */
//https://leetcode.com/problems/longest-palindromic-substring/?envType=daily-question&envId=2023-10-27
var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    let max = '';
    for (let i = 0; i < s.length; i++) {
      let left = helper(i, i, s);
      let right = helper(i, i + 1, s);
      let currMax = left.length >= right.length ? left : right;
      max = currMax.length > max.length ? currMax : max;
    }
    
    return max;
  };
  
  function helper(left, right, s) {
    let curr = '';
  
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      curr = s.substring(left, right + 1);
      left -= 1;
      right += 1;
    }
    
    return curr;
  }