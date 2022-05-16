module.exports = { 
  //param A : integer
  //return an integer
   solve : function(A){
         let dp = new Array(A + 1).fill(-1);
         const mod = Math.pow(10, 9) + 7
 
        function waysToSendSignalRec(n) {
            if(n === 0) {
                return 1;
            } else if(n === 1) {
                return 2;
            }
 
            if(dp[n] === -1) {
                dp[n] = (waysToSendSignalRec(n - 1) + waysToSendSignalRec(n - 2)) % mod;
            }
 
            return dp[n];
         }
 
         return waysToSendSignalRec(A);
 //dp = dp[i - 1] + dp[i - 2]
   }
 };
 