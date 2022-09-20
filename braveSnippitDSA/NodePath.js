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
var goodNodes = function(root) {
    let goodNodeCount = 0;
  
  
  function preOrder(node, maxValue) {
    if(node === null) {
      return;
    }
    
    if(node.val >= maxValue){
      goodNodeCount++;
      
      
    }
    maxValue = Math.max(maxValue, node.val)
    // if(node.left) {
    //   minValue = Math.max(minValue, node.left.val)
    // }
    preOrder(node.left, maxValue);
    // if(node.right) {
    //   minValue = Math.max(minValue, node.right.val)
    // }
    preOrder(node.right, maxValue);
  }
  
  preOrder(root, root.val);
  
  return goodNodeCount;
    
};

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

let root = new TreeNode(2);
root.right = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(8);
root.right.right.right = new TreeNode(4);

goodNodes(root);
