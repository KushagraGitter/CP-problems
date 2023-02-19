/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
vvar zigzagLevelOrder = (root) => {
    if (!root) {
        return [];
    }
    
    var output = [];
    var queue = [root];
    var isZig = true;
    
    while (queue.length) {
        var temp = [];
        var temp2 = [];
        
        while (queue.length) {
            var current = queue.shift();
            
            temp2.push(current.val);
            
            if (current.right) {
                temp.push(current.right);
            }

            if (current.left) {
                temp.push(current.left);
            } 
        } 
        
        if (isZig) {
            temp2.reverse();
        }

        isZig = !isZig;

        queue = temp;
        
        output.push(temp2);
    }
    
    return output;
};