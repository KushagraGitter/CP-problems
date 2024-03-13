/**
 * @param {number} n
 * @return {number}
 */
//https://leetcode.com/problems/find-the-pivot-integer/?envType=daily-question&envId=2024-03-13
var pivotInteger = function(n) {
    let x = Math.sqrt(n * (n + 1) / 2);
    
    if (x % 1 !== 0) {
        return -1;
    } else {
        return Math.floor(x);
    }
};