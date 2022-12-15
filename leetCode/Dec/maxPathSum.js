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
var maxPathSum = function(root) {
    let maxPathSumNum = -Infinity;
    
    const maxPathSumRec = function(node){
        if(!node){
            return 0;
        }
        
        let leftMax = Math.max(maxPathSumRec(node.left), 0);
        let rightMax = Math.max(maxPathSumRec(node.right), 0);
        maxPathSumNum = Math.max(maxPathSumNum, leftMax + rightMax + node.val);
        return Math.max(leftMax, rightMax) + node.val;
    };
    
    maxPathSumRec(root);
    return maxPathSumNum;
};

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);
   
console.log(maxPathSum(root))