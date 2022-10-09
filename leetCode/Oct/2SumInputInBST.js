//https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    let preOrderA = []
    function preOrder(node) {
        if(node == null) {
            return
        }
        
        preOrder(node.left)
        preOrderA.push(node.val)
        preOrder(node.right)
    }
    
    preOrder(root)
    
    let left = 0;
    let right = preOrderA.length - 1;
    
    while(right > left) {
        if(preOrderA[left] + preOrderA[right] > k) {
            right--
        } else if(preOrderA[left] + preOrderA[right] < k) {
            left++
        } else {
            return true;
        }
    }
    
    return false;
};