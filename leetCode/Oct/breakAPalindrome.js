//https://leetcode.com/problems/break-a-palindrome/
/**
 * @param {string} palindrome
 * @return {string}
 */
 var breakPalindrome = function(palindrome) {
    let s = palindrome.split('')
    let n = s.length;

        for (let i = 0; i < Math.floor(n / 2); i++) {
            if (s[i] != 'a') {
                s[i] = 'a';
                return s.join('')
            }
        }
        s[n - 1] = 'b'; //if all 'a'
        return n < 2 ? "" : s.join('');
};