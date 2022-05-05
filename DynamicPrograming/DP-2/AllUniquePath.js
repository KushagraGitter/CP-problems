module.exports = { 
  //param A : array of array of integers
  //return an integer
   uniquePathsWithObstacles : function(A){
         let n = A.length;
         let m = A[0].length;
 
         let dp = new Array(n);
 
         for(let i = 0; i < n; i++) {
             dp[i] = new Array(m).fill(0);
         }
         let cellValue  = 1;
         for(let j = 0; j < n; j++) {
            if(A[j][0] === 1) {
                 cellValue = 0
            }     
            dp[j][0] = cellValue;
         }
         
         cellValue  = 1;
         for(let k = 0; k < m; k++) {
            if(A[0][k] === 1) {
                 cellValue = 0
            } 
             dp[0][k] = cellValue;
         }
 
         for(let i = 1; i < n; i++) {
             for(let j = 1; j < m; j++) {
                 if(A[i][j] !== 1) {
                        dp[i][j] = (dp[i][j - 1] + dp[i - 1][j])
                 } else {
                     dp[i][j] = 0;
                 }
              
             }
         }
 
      return dp[n - 1][m - 1];
   }
 };
 