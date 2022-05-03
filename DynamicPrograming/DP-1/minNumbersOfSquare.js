module.exports = { 
  //param A : integer
  //return an integer
   countMinSquares : function(A){
         dp = new Array(A + 1).fill(0);
         for(let i = 1; i <= A; i++) {
             let ans = Infinity;
 
             for(let j = 1; j*j <= i; j++) {
                 ans = Math.min(ans, dp[i - j*j] + 1)
             }
 
             dp[i] = ans;
         }
 
         return dp[A];
   }
 };
 