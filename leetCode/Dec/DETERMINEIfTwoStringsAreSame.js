//https://leetcode.com/problems/determine-if-two-strings-are-close/
/**
* @param {string} word1
* @param {string} word2
* @return {boolean}
*/
var closeStrings = function(word1, word2) {
    // we can check the freq of letter in both the words and sort the strings and check if freq is same and words are same

    if(word1.length !== word2.length) return false;

    const ws1 = [...new Set(word1)].sort().join('')
    const ws2 = [...new Set(word2)].sort().join('')
    if(ws1 !== ws2) return false;

    const freq1 = Array(26).fill(0);
    const freq2 = Array(26).fill(0);

    for(let i = 0; i < word1.length; i++) {
        const idx1 = word1[i].charCodeAt() - 'a'.charCodeAt();
        const idx2 = word2[i].charCodeAt() - 'a'.charCodeAt();
        freq1[idx1]++;
        freq2[idx2]++;
    }
    const str1 = freq1.filter(x => x).sort().join()
    const str2 = freq2.filter(x => x).sort().join()
    return str1 === str2;
};