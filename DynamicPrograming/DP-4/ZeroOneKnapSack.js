module.exports = { 
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
   solve : function(A, B, C){
         const m = A.length;
 
         let dp = new Array(m);
 
         for(let i = 0; i <= m; i++) {
             dp[i] = new Array(C + 1).fill(-1);
         }
 
        //itterative solution  
         // for(let i = 1; i <= m; i++) {
         //     for(let j = 1; j <= C; j++) {
         //         dp[i][j] = dp[i - 1][j];
         //         if(j >= B[i]) {
         //             dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - B[i]] + A[i]);
         //         }
         //     }
 
         // }
 
         // return dp[m][C]
 
         // const m = A.length;
         // let dp = new Array(m + 1);
 
         // for (let i = 0; i <= m; i++) {
         //     dp[i] = new Array(C + 1).fill(-1);
         // }
       
         //reccursive solutio
         function ZeroOneKnapSackRec(i, j) {
             // base case
            if (i < 0 || j < 0) {
                 return 0;
             }
 
             if (dp[i][j] === -1) {
                 if(j >= B[i]) {
                     const x = ZeroOneKnapSackRec(i - 1, j);
                     const y = ZeroOneKnapSackRec(i - 1, j - B[i]) + A[i] 
                     dp[i][j] = Math.max(x, y);
                 } else {
                     dp[i][j] = ZeroOneKnapSackRec(i - 1, j);
                 }
             
             }
 
             return dp[i][j];
         }
 
         return ZeroOneKnapSackRec(A.length - 1, C)
 
   }
 };
 