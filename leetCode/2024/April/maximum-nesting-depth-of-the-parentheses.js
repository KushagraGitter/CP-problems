/**
 * @param {string} s
 * @return {number}
 */
//https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/?envType=daily-question&envId=2024-04-04
var maxDepth = function(s) {
    let count = 0;
    let maxNum = 0;
    for (let c of s) {
        if (c === '(') {
            count++;
            if (maxNum < count)
                maxNum = count;
        } else if (c === ')') {
            count--;
        }
    }
    return maxNum;
};