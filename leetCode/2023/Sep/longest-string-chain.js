/**
 * @param {string[]} words
 * @return {number}
 */
//https://leetcode.com/problems/longest-string-chain/description/?envType=daily-question&envId=2023-09-23
var longestStrChain = function(words) {
    words.sort((a, b) => a.length > b.length ? 1 : -1)
    const memo = new Map()
    for (let j = 0; j < words.length; j++) {
        memo.set(words[j], 1)
        for (let i = 0; i < words[j].length; i++) {
            const x = words[j].slice(0, i) + words[j].slice(i+1)
            if (memo.has(x)) {
                memo.set(words[j], Math.max(memo.get(words[j]), memo.get(x) + 1))
            }
        }
    }
    return Math.max(...memo.values());
}