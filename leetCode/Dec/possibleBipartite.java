class Solution {
    public boolean possibleBipartition(int N, int[][] dislikes) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        for (int i = 1; i <= N; i++) {
            graph.put(i, new ArrayList<>());
        }
        for (int[] dislike : dislikes) {
            graph.get(dislike[0]).add(dislike[1]);
        }
        for (int start = 1; start <= N; start++) {
            int[] color = new int[N + 1];
            Arrays.fill(color, -1);
            if (!helper(graph, color, start, 0)) {
                return false;
            }
        }
        return true;
    }
    
    public boolean helper(Map<Integer, List<Integer>> graph, int[] color, int node, int flag) {
        color[node] = flag;
        for (int nei : graph.get(node)) {
            if (color[nei] == -1) {
                if (!helper(graph, color, nei, flag ^ 1)) {
                    return false;
                } 
            } else if (color[nei] == color[node]) {
                return false;
            }
        }
        return true;
    }
}