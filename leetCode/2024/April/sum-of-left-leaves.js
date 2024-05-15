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
//https://leetcode.com/problems/sum-of-left-leaves/?envType=daily-question&envId=2024-04-14
var sumOfLeftLeaves = function(root) {
    if (!root)
        return 0;
    
    let ans = 0;
    
    if (root.left) {
        if (!root.left.left && !root.left.right)
            ans += root.left.val;
        else
            ans += sumOfLeftLeaves(root.left);
    }
    
    ans += sumOfLeftLeaves(root.right);
    
    return ans;
};