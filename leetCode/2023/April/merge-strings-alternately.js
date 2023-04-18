/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
//https://leetcode.com/problems/merge-strings-alternately/description/
var mergeAlternately = function(word1, word2) {
    let p1 = 0;
    let p2 = 0;
    let result = [];
    while(p1 < word1.length && p2 < word2.length) {
        result.push(word1[p1]);
        result.push(word2[p2]);
        p1++;
        p2++;
    }

    while(p1 < word1.length) {
        result.push(word1[p1])
        p1++;
    }

    while(p2 < word2.length) {
        result.push(word2[p2]);
        p2++;
    }

    return result.join('')
};