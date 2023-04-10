//https://leetcode.com/problems/optimal-partition-of-string/description/
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let set = new Set();
    let count = 1;
    let start  = 0; 

    while(start < s.length) {
        if(set.has(s[start])) {
            count++;
            set = new Set();
        } else {
            set.add(s[start]);
            start++;
        }
    }

    return count;
};