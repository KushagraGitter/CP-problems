//https://leetcode.com/problems/leaf-similar-trees/description/
/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root1
* @param {TreeNode} root2
* @return {boolean}
*/
var leafSimilar = function(root1, root2) {
    let leaf1 = [];
    let leaf2 = [];

    function getLeaf(root, arr) {
        if(root === null) {
            return
        }

        if(root.left === null && root.right === null) arr.push(root.val)
        getLeaf(root.left, arr)
        getLeaf(root.right, arr)
    }

    getLeaf(root1, leaf1)
    getLeaf(root2, leaf2)
    console.log(leaf1)
    console.log(leaf2)
    let isLeafEqual = true
    let length = leaf1.length > leaf2.length ? leaf1.length : leaf2.length
    for(let i = 0; i < length; i++) {
        if(leaf1[i] !== leaf2[i]) {
            return false
        }
    }

    return true;
};