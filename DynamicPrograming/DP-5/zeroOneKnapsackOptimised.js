module.exports = { 
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
   solve : function(A, B, C){
     // const m = A.length;
     // A.unshift(0);
     // B.unshift(0);
     // let dp = new Array(m + 1);
 
     // for (let i = 0; i <= m; i++) {
     //   dp[i] = new Array(C + 1).fill(0);
     // }
 
     // for (let i = 1; i <= m; i++) {
     //   for (let j = 1; j <= C; j++) {
     //     dp[i][j] = dp[i - 1][j];
     //     if (j >= B[i]) {
     //       dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - B[i]] + A[i]);
     //     }
     //   }
     // }
 
     // return dp[m][C];
     // space optimise solution 
     const m = A.length;
     A.unshift(0);
     B.unshift(0);
     let dp = new Array(2);
 
     for (let i = 0; i < 2; i++) {
       dp[i] = new Array(C + 1).fill(0);
     }
 
     for (let i = 1; i <= m; i++) {
       for (let j = 1; j <= C; j++) {
         dp[i % 2][j] = dp[(i - 1) % 2][j];
         if (j >= B[i]) {
           dp[i % 2][j] = Math.max(dp[i % 2][j], dp[(i - 1) % 2][j - B[i]] + A[i]);
         }
       }
     }
 
     return dp[m % 2][C];
   }
 };
 