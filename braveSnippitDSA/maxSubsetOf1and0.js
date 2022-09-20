var findMaxForm = function(strs, m, n) {
    dp = new Array(strs.length + 1).fill(-1);
    // dp[0] = 0;
    // for(let i = 1; i <= strs.length; i++) {
    //     dp[i] = dp[i - 1];
        
    //     const [zeroCount, oneCount] = getNumberOfZeroAndOne(strs[i - 1]); 
        
    //     if(zeroCount <= m && oneCount <= n) {
    //         m = m - zeroCount;
    //         n = n - oneCount;
            
    //         dp[i] = Math.max(dp[i], dp[i - 1] + 1)
    //     }
    // }

    function getMaxRec(m, n, i) {
        if(m === 0 || n === 0 || i == strs.length) {
            return 0;
        }

        if(dp[i] === -1) {
            const [zeroCount, oneCount] = getNumberOfZeroAndOne(strs[i]); 
            dp[i] = Math.max(getMaxRec(m, n, i + 1), getMaxRec(m - zeroCount, n - oneCount, i + 1) + 1);
        }

        return dp[i];
    }
        
    function getNumberOfZeroAndOne(str) {
        let zeroCount = 0;
        let oneCount = 0;
        for(let i = 0; i < str.length; i++) {
            if(str[i] == "0") {
                zeroCount++;
            } else {
                oneCount++;
            }
        }
        
        return [zeroCount, oneCount];
    }
    
    return getMaxRec(m, n, 0);
    
};