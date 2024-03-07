//https://leetcode.com/problems/cherry-pickup-ii/?envType=daily-question&envId=2024-02-11
class Solution {
    public int cherryPickup(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        int[][][] dp = new int[2][n][n];
        int ans = 0;

        for(int i=0;i<2;i++)
            for(int j=0;j<n;j++)
                Arrays.fill(dp[i][j], -1);

        dp[0][0][n-1] = grid[0][0] + grid[0][n-1];

        for(int i=1;i<m;i++) {
            for(int j=0;j<n;j++) { // robotA
                for(int k=j+1;k<n;k++) { // robotB
                    int max = -1;
                    for(int x=-1;x<=1;x++) { // we will have total 9 combinations
                        for(int y=-1;y<=1;y++) {
                            if(j+x >= 0 && j+x < n && k+y >= 0 && k+y < n)
                                max = Math.max(
                                    max,
                                    dp[(i+1)%2][j+x][k+y]
                                );
                        }
                    }
                    if(max != -1)
                        dp[i%2][j][k] = max + grid[i][j] + grid[i][k];
                    if(ans < dp[i%2][j][k]) ans = dp[i%2][j][k];
                }
            }
        }

        return ans;
    }
}