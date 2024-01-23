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
//https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/?envType=daily-question&envId=2024-01-11
var maxAncestorDiff = function(root) {
    if (!root)
        return 0;
    let diff = 0;
    helper(root, root.val, root.val);
    return diff;

    function helper(root, minVal, maxVal) {
        if (!root)
            return;
        diff = Math.max(diff, Math.max(Math.abs(minVal - root.val), Math.abs(maxVal - root.val)));
        minVal = Math.min(minVal, root.val);
        maxVal = Math.max(maxVal, root.val);
        helper(root.left, minVal, maxVal);
        helper(root.right, minVal, maxVal);
    }
};