//https://leetcode.com/problems/as-far-from-land-as-possible/description/
class Solution {
     private int[] d = {0, 1, 0, -1, 0};
    public int maxDistance(int[][] grid) {
        int R = grid.length;
        int C = grid[0].length;
        int steps = -1;
        int[][] dist = new int[R][C];
        Queue<int[]> q = new LinkedList<>();
        for (int r = 0; r < R; ++r) {
            for (int c = 0;  c < C; ++c) {
                if (grid[r][c] == 1) {
                    q.offer(new int[]{r, c});
                }
            }
        }
        while (!q.isEmpty()) {
            int[] cur = q.poll();
            for (int k = 0; k < 4; ++k) {
                int r = cur[0] + d[k];
                int c = cur[1] + d[k + 1];
                if (0 <= r && r < R && 0 <= c && c < C && 
                			grid[r][c] == 0 && dist[r][c] == 0) {
                    dist[r][c] = dist[cur[0]][cur[1]] + 1;
                    q.offer(new int[]{r, c});
                    steps = Math.max(steps, dist[r][c]);
                }
            }
        }
        return steps;
    }
}