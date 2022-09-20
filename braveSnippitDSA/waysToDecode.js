	 function numDecodings(A){
        dp = new Array(A.length).fill(0);
        dp[0] = 1;
        dp[1] = 3;
       

        for(i = 2; i < A.length; i++) {
            dp[i] = dp[i - 1];

            if(i > 0 && (A[i - 1]+ A[i]) >= 1 && (A[i - 1]+ A[i]) <= 26 ) {
                dp[i] = dp[i] + dp[i - 2];
            }
        }

        return dp[A.length - 1];
	}