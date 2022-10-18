function longestCommonSubsequence(str1, str2) {
    // Write your code here.
    let dp = new Array(str1.length + 1);

    for(let i = 0; i < str2.length; i++) {
        dp[i] = new Array(str2.length + 1).fill("")
    }


    for(let  i = 1; i < dp.length; i++) {
        for(let j = 1; j < dp.length; j++) {
            if(str1[i - 1] === str2[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + str1[i - 1]
            else
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1] ? dp[i - 1][j] : dp[i][j - 1]
        }
    }

    return dp[str1.length][str2.length]


}
