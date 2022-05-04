module.exports = { 
  //param A : array of array of integers
  //return an integer
   adjacent : function(A){
         // idea is to convert 2D mat to 1D by choosing max elements from each col
 
         let newA = new Array(A[0].length).fill(0);
 
         for(let i = 0; i < A[0].length; i++) {
             newA[i] = Math.max(A[0][i], A[1][i]);
         }
 
          let dp = new Array(newA.length).fill(0);
 
             dp[0] = newA[0];
             dp[1] = Math.max(newA[0], newA[1]);
 
             for (let i = 2; i < newA.length; i++) {
                 dp[i] = Math.max(dp[i - 1], newA[i] + dp[i - 2]);
             }
 
             return dp[newA.length - 1];
   }
 };
 