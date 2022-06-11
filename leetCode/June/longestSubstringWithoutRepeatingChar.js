//https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = {};
  let left = 0,
    right = 0,
    max_len = 0;

  while (right < s.length) {
    if (s[right] in map && map[s[right]] >= left) {
      left = map[s[right]] + 1;
    }
    map[s[right]] = right;
    ++right;

    max_len = Math.max(max_len, right - left);
  }
  return max_len;
};
