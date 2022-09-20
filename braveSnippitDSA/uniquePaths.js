function uniquePaths(A) {
    const n = A.length;
    const m = A[0].length;
    
    let dp = new Array(n);

    for(let i = 0; i < n; i++) {
        dp[i] = new Array(m).fill(0);
    }

    
}