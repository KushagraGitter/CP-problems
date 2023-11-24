//https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/?envType=daily-question&envId=2023-11-02
class Solution {
    int result = 0;

    public int averageOfSubtree(TreeNode root) {
        dfs(root);
        return result;
    }

    private int[] dfs(TreeNode node) {
        if (node == null) {
            return new int[]{0, 0};
        }

        int[] left = dfs(node.left);
        int[] right = dfs(node.right);

        int currentSum = left[0] + right[0] + node.val;
        int currentCount = left[1] + right[1] + 1;

        if (currentSum / currentCount == node.val) {
            result++;
        }

        return new int[]{currentSum, currentCount};
    }
}