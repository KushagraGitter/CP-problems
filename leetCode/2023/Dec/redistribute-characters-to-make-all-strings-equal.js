/**
 * @param {string[]} words
 * @return {boolean}
 */
//https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/?envType=daily-question&envId=2023-12-30
var makeEqual = function(words) {
    if (words.length === 1) {
        return true;
    }

    let totalCharCount = 0;
    for (const s of words) {
        totalCharCount += s.length;
    }

    if (totalCharCount % words.length !== 0) {
        return false;
    }

    let myMap = new Array(26).fill(0);
    for (const s of words) {
        for (const c of s) {
            myMap[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    }

    for (const i of myMap) {
        if (i % words.length !== 0) {
            return false;
        }
    }

    return true;
};