/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    const valsArray = [];
    const nodes = [root];
    let minDiff = Infinity;
    
    while(nodes.length) {
        let node = nodes.pop();
        valsArray.push(node.val);
        
        if (node.left) {
            nodes.push(node.left);
        }
        
        if (node.right) {
            nodes.push(node.right);
        }
    }
    
    valsArray.sort((a,b) => a-b);
    const len = valsArray.length;
    
    for (let i = 0; i < len - 1; i++) {
        let diff = valsArray[i + 1] - valsArray[i];
        
        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    
    return minDiff;
};