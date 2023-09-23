/**
 * @param {string} s
 * @return {number}
 */
//https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/?envType=daily-question&envId=2023-09-12
var minDeletions = function(s) {
    const chars = new Map();
    for (const char of s) {
        chars.set(char, (chars.get(char) || 0) + 1);
    }

    const freqSet = new Set();
    let count = 0;

    for (let freq of chars.values()) {
        while (freq > 0 && freqSet.has(freq)) {
            freq--;
            count++;
        }

      freqSet.add(freq);
    }

    return count;    
};