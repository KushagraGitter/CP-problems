/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  let charCount = 0;
  
  while(p1 <= p2 ) {

      if(s[p1] !== s[p2]) {
          return (checkIfPalindrome(s, p1 + 1, p2) || checkIfPalindrome(s, p1, p2 - 1))
          
      }
      p1++;
      p2--;

  }
  
  function checkIfPalindrome(sub, i, j) {
      while(i < j) {
          if(sub[i] !== sub[j]) {
              return false;
          }
          i++
          j--;
      }
      return true;
  }
  
  return true;
};