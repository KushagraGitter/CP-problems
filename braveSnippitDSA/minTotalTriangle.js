var minimumTotal = function(triangle) {
   const n = triangle.length;
   let dp = new Array(n).fill(0);
    
   dp[0] = triangle[0][0];
   
   for(let i = 1; i < n; i++) {
       //dp[k] = dp[k - 1] + triangle[i][0];
       for(let k = 1; k < triangle[i].length; k++) {
            dp[k] = Math.min(dp[k], dp[k - 1]) + triangle[i][k];
       }
   }
    
    return dp[n - 1];
};
