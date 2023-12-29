/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
//https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/?envType=daily-question&envId=2023-12-29
var minDifficulty = function(jobDifficulty, d) {
    if(d > jobDifficulty.length) return -1;   
    const dp  = new Array(d+1).fill(0).map(()=>new Array(jobDifficulty.length).fill(-1));
    
    return partition(jobDifficulty,d,dp,0);
};

function partition(jobDifficulty,d,dp,idx){
    if(d===1){
        let max = 0;
        while(idx < jobDifficulty.length){
            max = Math.max(max,jobDifficulty[idx++])
        }
        return max;
    }
    
    if(dp[d][idx]!==-1) return dp[d][idx];
    
    let max = 0;
    let res = Number.POSITIVE_INFINITY;
    
    for(let i=idx;i<jobDifficulty.length - d + 1;i++){
        max = Math.max(max,jobDifficulty[i]);
        res = Math.min(res, max + partition(jobDifficulty,d-1,dp,i+1))
    }
    
    return dp[d][idx] = res
}