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
//https://leetcode.com/problems/sum-root-to-leaf-numbers/?envType=daily-question&envId=2024-04-15
var sumNumbers = function(root) {
    let result = 0
    dfs(root, "")
    
    function dfs(root, currentPath){
        if(!root) return
        if(!root.left && !root.right){
            currentPath += root.val
            result += parseInt(currentPath)
            return
        }
        dfs(root.left, currentPath + root.val)
        dfs(root.right, currentPath + root.val)
    }
    
    return result
};