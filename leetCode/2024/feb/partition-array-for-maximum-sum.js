/**
 * Time: O(n*k)
 * Space: O(n)
 *
 * Loop through A and calculate maximum sum after partitioning from 0 to i.
 * Use dynamic programming to save previous values.
 *
 * Let K = 3. Then dp[i] would be...
 * dp[i] = A[i]                   + dp[i-1]
 *    OR   A[i] + A[i-1]          + dp[i-2]
 *    OR   A[i] + A[i-2] + A[i-3] + dp[i-3]
 *      ... repeat K times ...
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
//https://leetcode.com/problems/partition-array-for-maximum-sum/submissions/1164940916/?envType=daily-question&envId=2024-02-03
const maxSumAfterPartitioning = (A, K) => {
    const n = A.length;
    const dp = new Array(n);
    for (let i=0; i<n; i++) {
        if (i === 0) dp[i] = A[i];
        else {
            let max = -Infinity;
            for (let j=1; j<=K; j++) {
                const prev = i>=j ? dp[i-j] : 0;
                max = Math.max(max, prev + sum(A, i-(j-1), i));
            }
            dp[i] = max;
        }
    }
    return dp[dp.length-1];
};

const sum = (A, from, to) => {
    from = Math.max(from, 0);
    to = Math.min(to, A.length-1);
    let max = -Infinity;
    for (let i=from; i<=to; i++) max = Math.max(max, A[i]);
    const result = max * (to-from+1);
    return result;
};