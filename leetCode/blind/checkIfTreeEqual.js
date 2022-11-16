//https://leetcode.com/problems/same-tree/
/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} p
* @param {TreeNode} q
* @return {boolean}
*/
var isSameTree = function(p, q) {
    function checkTree(nodeP, nodeQ) {
        if(nodeP === null && nodeQ === null)  return true

        if(nodeP == null || nodeQ === null) return false

        if(nodeP.val !== nodeQ.val) return false

        return checkTree(nodeP.left, nodeQ.left) && checkTree(nodeP.right, nodeQ.right)
    }

    return checkTree(p, q)
};