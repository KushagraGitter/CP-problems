//https://leetcode.com/problems/top-k-frequent-words/
/**
* @param {string[]} words
* @param {number} k
* @return {string[]}
*/
var topKFrequent = function (words, k) {
    let hash = {};
    for (let w of words) {
        hash[w] = (hash[w] || 0) + 1;
    }
    let arr = Object.keys(hash);
    arr.sort((a, b) => {
        let diff = hash[b] - hash[a];
        return diff === 0 ? a.localeCompare(b) : diff;
    });
    return arr.slice(0, k);
};