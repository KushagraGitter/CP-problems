//https://leetcode.com/problems/count-complete-tree-nodes/
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
var countNodes = function(root) {
    let countNode = 0;

    function dfsTree(node) {
        if(node === null) {
            return
        }

        countNode++;
        dfsTree(node.left)
        dfsTree(node.right)
    }

    dfsTree(root)

    return countNode;
};