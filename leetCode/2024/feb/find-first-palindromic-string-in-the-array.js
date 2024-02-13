/**
 * @param {string[]} words
 * @return {string}
 */
//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/?envType=daily-question&envId=2024-02-13
var firstPalindrome = function(words) {

    for(let i = 0; i < words.length; i++) {
        if(checkPalindrome(words[i])) {
            return words[i];
        }
    }

    return "";

    function checkPalindrome(word) {
        let start = 0;
        let end = word.length - 1;

        while(end > start) {
            if(word[end] === word[start]) {
                start++;
                end--;
            } else {
                return false;
            }
        }
        return true;
    }
};