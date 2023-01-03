//https://leetcode.com/problems/delete-columns-to-make-sorted/
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    let len = strs[0].length
    for(let i = 0; i < len; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[j - 1][i].charCodeAt() - 'a'.charCodeAt() > strs[j][i].charCodeAt() - 'a'.charCodeAt()) {
                count++
                break;
            }
        }
    }

    return count;
};