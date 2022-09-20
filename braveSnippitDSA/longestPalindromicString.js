var longestPalindrome = function(s) {
    let revS = Array.from(s).reverse().join('');
    let dp = new Array(s.length);
    let ans = '';
    for(let i = 0; i < s.length; i++) {
        dp[i] = new Array(s.length).fill('');
    }
    
    let Strlength = s.length - 1;
    function lcs(i, j) {
        if(i === -1 || j === -1) {
            return '';
        }
        
        if(dp[i][j] === '') {
            if(s[i] === revS[j]) {
              dp[i][j] =  lcs(i-1, j-1) + s[i]
                
            } else {
                if(lcs(i-1, j).length > lcs(i, j - 1).length) {
                  dp[i][j] =  lcs(i-1, j); 
                } else {
                  dp[i][j] =  lcs(i, j - 1);   
                }
               // dp[i][j] = Math.max(lcs(i-1, j).length, lcs(i, j - 1).length);
            }
        }
        
        return dp[i][j]
    }
    
   
    return  lcs(Strlength, Strlength);
};