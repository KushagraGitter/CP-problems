module.exports = { 
  //param A : integer
  //return an integer
   climbStairs : function(A){
     let dp = new Array(A + 1).fill(-1);
         function stairs(n) {
             if(n <= 1) {
                 dp[n] = 1;
                 return 1;
             }
             if(dp[n] === -1) {
                 dp[n] = stairs(n - 1) + stairs(n - 2);
             }
             return dp[n];
         }
         stairs(A);
         return dp[A]
   }
 };
 