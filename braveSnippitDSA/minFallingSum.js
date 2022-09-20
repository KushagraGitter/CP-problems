 function minFallingSum(A){
        const m = A.length;
        const n = A[0].length;

        let dp = new Array(m);

      

        for(let i = 0; i < m; i++) {
            dp[i] = new Array(n).fill(0);
        }

        // for(let i = 0; i <= n; i++) {
        //     dp[i][0] = Math.min(...A[i]);    
        // } 

        for(let j = 0; j < n; j++) {
            dp[0][j] = A[0][j];    
        } 

        for(let i = 1; i < m; i++) {
            for(let j = 0; j < n; j++) {
                  let minSum = Infinity;    
                dp[i][j] = A[i][j];
                
                    for(let k = 0 ; k < n; k++) {
                        if(k !== j) {
                            minSum = Math.min(minSum, dp[i - 1][k])
                        }
                    }   
                    dp[i][j] = dp[i][j] + minSum;
            }

            
        }

        return Math.min(...dp[m - 1])
	}