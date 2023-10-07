//https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/?envType=daily-question&envId=2023-10-07
var numOfArrays = function(n, m, k) {
    const MOD = 1000000007;

    let dp = new Array(n + 1).fill(null).map(() => {
        return new Array(m + 1).fill(null).map(() => {
            return new Array(k + 1).fill(0);
        });
    });

    let prefix = new Array(n + 1).fill(null).map(() => {
        return new Array(m + 1).fill(null).map(() => {
            return new Array(k + 1).fill(0);
        });
    });

    for (let j = 1; j <= m; j++) {
        dp[1][j][1] = 1;
        prefix[1][j][1] = j;
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            for (let l = 1; l <= k; l++) {
                dp[i][j][l] = (j * dp[i - 1][j][l]) % MOD;

                if (j > 1 && l > 1) {
                    dp[i][j][l] = (dp[i][j][l] + prefix[i - 1][j - 1][l - 1]) % MOD;
                }

                prefix[i][j][l] = (prefix[i][j - 1][l] + dp[i][j][l]) % MOD;
            }
        }
    }

    return prefix[n][m][k];
};