/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//https://leetcode.com/problems/invert-binary-tree/description/
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function invert(root) {
        if(root ===null) {
            return null
        }

        let temp = root.left;
        root.left = root.right;
        root.right = temp

        invert(root.right);
        invert(root.left);

        return root
    }

     invert(root)

     return root
};