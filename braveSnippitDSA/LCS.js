function LongestCommonSubSwq(A, B) {
        
    let n = A.length;
    let m = B.length;

    let dp = new Array(n);

    for (let i = 0; i < n; i++) {
      dp[i] = new Array(m).fill(-1);
    }

    // reccursive code for dp

    function lcs(i, j) {
      if (j === -1 && i === -1) {
        return 1;
      } else if (j === -1 && i >=0) {
        return 1;
      }
      else if( i === -1 && j >= 0) {
        return 0;
      }

      if (dp[i][j] === -1) {
        if (A[i] === B[j]) {
          dp[i][j] = lcs(i - 1, j - 1) + lcs(i - 1, j);
        } else {
          dp[i][j] = lcs(i - 1, j)
        }
      }
      return dp[i][j];
    }

    const ans = lcs(n - 1, m - 1);

    return ans;
  }