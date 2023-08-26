/**
 * @param {number[][]} pairs
 * @return {number}
 */
//https://leetcode.com/problems/maximum-length-of-pair-chain/description/
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => {
        return a[1] - b[1]
    });

    let prev = 0;
    let res =1;

    for(let i = 1; i < pairs.length; i++) {
        if(pairs[prev][1] < pairs[i][0]) {
            prev = i;
            res++;
        }
    }

    return res;
 };