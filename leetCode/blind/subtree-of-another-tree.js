//https://leetcode.com/problems/subtree-of-another-tree/description/
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
* @param {TreeNode} subRoot
* @return {boolean}
*/
var isSubtree = function(root, subRoot) {
    if(root == null) {
        return false
    }
    if(isSameTree(root, subRoot)) {
        return true
    }

    function isSameTree(s, t) {
        if(s === null && t === null) {
            return true
        }

        if(s === null || t === null) {
            return false;
        }

        if(s.val !== t.val) {
            return false
        } else {
            return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
        }
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)


};