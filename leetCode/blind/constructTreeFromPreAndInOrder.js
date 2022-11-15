//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {number[]} preorder
* @param {number[]} inorder
* @return {TreeNode}
*/
var buildTree = function(preorder, inorder) {
    let map = new Map();
    let preIndex = 0;

    for(let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }

    function constructTree(pStart, pEnd, iStart, iEnd) {
        if(pStart > pEnd || iStart > iEnd) {
            return null
        }

        let newNode = new TreeNode(preorder[pStart])
        let index = map.get(newNode.val)
        let leftNode = index - iStart

        newNode.left = constructTree(pStart + 1, pStart + leftNode, iStart, index - 1)
        newNode.right = constructTree(pStart + leftNode + 1, pEnd, index + 1, iEnd)

        return newNode

    }

    return constructTree(0, preorder.length - 1, 0, inorder.length - 1)


};