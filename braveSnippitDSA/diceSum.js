	function diceSum(A){
        let dp = new Array(7).fill(0);
        
        dp[0] = 1;
        const mod = Math.pow(10, 9) + 7;
       

        for(let i = 1; i <= A ; i++) {
             let sum = 0;
            for(let j = 1; j <= 6 && j <= i; j++) {
                sum = (sum + dp[((i - j) % 7)]) % mod;
            }
            dp[ i % 7] = sum
        }

        return dp[A % 7]
	}