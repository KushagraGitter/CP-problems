//https://leetcode.com/problems/check-if-the-sentence-is-pangram/
/**
* @param {string} sentence
* @return {boolean}
*/
var checkIfPangram = function(sentence) {
    const set = new Set(sentence)
    return set.size === 26 ? true : false
};