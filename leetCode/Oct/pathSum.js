//https://leetcode.com/problems/path-sum/
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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    function dfs(node, sum) {
        if(node === null) {
            return false
        }
        
        if(sum === node.val && node.right === null && node.left === null) {
            return true;
        }
        
        return dfs(node.left, sum - node.val) || dfs(node.right, sum - node.val) 
        
    }
    
    return dfs(root, targetSum);
};