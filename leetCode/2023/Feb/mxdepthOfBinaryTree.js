/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    function depth(root, count) {
        if(root === null) {
            return count
        }

        return Math.max(depth(root.left, count + 1), depth(root.right, count + 1))
    }

    return depth(root, 0)
};