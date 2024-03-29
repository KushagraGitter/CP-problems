/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//https://leetcode.com/problems/uncrossed-lines/description/
 // TC = O(h * w) , SC = O(h * w) --> Can be converted to O(min(h,w))
 var maxUncrossedLines = function(A, B) {
    [h , w ] = [A.length, B.length]
    dp = new Array(h+1).fill(0).map(() => new Array(w+1).fill(0) )
    for(let i = 0 ; i< h ; i++){
        for(let j = 0 ; j < w ; j++){
            if(A[i] === B[j]){
                dp[i+1][j+1] = 1 + dp[i][j]
            }
            else{
                dp[i+1][j+1] = Math.max(  dp[i][j+1] , dp[i+1][j])
            }

        }
    }
    return dp[h][w]

};