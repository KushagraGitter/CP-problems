	function coinchange2(A, B){
        const n = A.length;
        let dp = new Array(n + 1);
        const mod = Math.pow(10, 6) + 7

        A.unshift(0);

        for(let i = 0; i <= n; i++) {
            dp[i] = new Array(B + 1).fill(0);
        }

        for(let i = 0; i <= n; i++) {
            dp[i][0] = 1;
        }

        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= B; j++) {
                dp[i][j] = dp[i - 1][j];

                if(j >= A[i]) {
                    dp[i][j] = (dp[i][j] + dp[i][j - A[i]]) % mod;
                }
            }
        }

        return dp[n][B]
	}