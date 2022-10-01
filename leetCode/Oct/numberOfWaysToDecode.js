//https://leetcode.com/problems/decode-ways/
/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    let n= s.length;
    let dp=new Array(n + 1).fill(0);
    
    dp[n]=1;
    for(let i=n-1;i>=0;i--)
        if(s[i]!='0') {
            dp[i]=dp[i+1];
            if(i<n-1&&(s[i]=='1'||s[i]=='2'&&s[i + 1]<'7')) 
                dp[i]+=dp[i+2];
        }
    return dp[0];
};