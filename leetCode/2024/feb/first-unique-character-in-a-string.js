/**
 * @param {string} s
 * @return {number}
 */
//https://leetcode.com/problems/first-unique-character-in-a-string/?envType=daily-question&envId=2024-02-05
var firstUniqChar = function(s) {
    let map = new Map();
  
  for(let i = 0; i < s.length; i++) {
    if(map.has(s[i])) {
      map.set(s[i], map.set(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
    
    
  }
  
  for(let i = 0; i < s.length; i++) {
    if(map.get(s[i]) === 1) {
      return i
    }
  }
  return -1;
};