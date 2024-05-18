/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//https://leetcode.com/problems/distribute-coins-in-binary-tree/?envType=daily-question&envId=2024-05-18
var distributeCoins = function(root) {
    let moves = 0;

    function dfs(node) {
        if (!node) return 0;
        let leftExcess = dfs(node.left);
        let rightExcess = dfs(node.right);
        moves += Math.abs(leftExcess) + Math.abs(rightExcess);
        return node.val + leftExcess + rightExcess - 1;
    }

    dfs(root);
    return moves;
};

// Time Complexity: O(n) where n is the number of nodes in the tree.
// Space Complexity: O(h) where h is the height of the tree (due to recursion stack).