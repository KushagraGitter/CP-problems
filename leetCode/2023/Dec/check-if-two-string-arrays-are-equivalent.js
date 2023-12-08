/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/?envType=daily-question&envId=2023-12-01
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join("") === word2.join("") ? true : false;
};