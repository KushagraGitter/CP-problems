//https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/
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
var maxAncestorDiff = function(root) {
    let maxDiff = -Infinity;
    function calculateMaxDiffFromNode(rootNode, rootValue, maxDiff) {
        if(rootNode === null) return maxDiff

        maxDiff = Math.max(maxDiff, Math.abs(rootNode.val - rootValue))

        return Math.max(calculateMaxDiffFromNode(rootNode.left, rootValue, maxDiff), calculateMaxDiffFromNode(rootNode.right, rootValue, maxDiff))
    }

    function findMax(root) {
        if(root === null) {
            return maxDiff
        }
        let rootVal = root.val
        maxDiff = calculateMaxDiffFromNode(root, rootVal, maxDiff)

        return  Math.max(findMax(root.left), findMax(root.right))
    }

    return findMax(root)
};