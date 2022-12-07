//https://leetcode.com/problems/range-sum-of-bst/description/
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
* @param {number} low
* @param {number} high
* @return {number}
*/
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    function inorder(root) {
        if(root === null) {
            return
        }

        inorder(root.left)

        if(root.val >= low && root.val <= high) {
            sum = sum + root.val
        }

        inorder(root.right)
    }

    inorder(root)

    return sum;
};