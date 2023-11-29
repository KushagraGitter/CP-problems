/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//https://leetcode.com/problems/number-of-1-bits/?envType=daily-question&envId=2023-11-29
var hammingWeight = function(n) {
    // let setBits = 0
    // while(A > 0) {
    //     A = A & (A - 1)
    //     // setBits = setBits + A % 2;
    //     // A = A >> 1;
    //     setBits++;
    // }
    // return setBits;
     let count = 0;
    while (n) {
        count += n % 2;
        n = Math.floor(n / 2);
    }
    return count;
};