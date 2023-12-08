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
 * @return {string}
 */
var tree2str = function(root) {
  
    function inOrderString(node) {
      if(node === null) {
        return '';
      }
      
      if(node.left === null && node.right === null) {
        return node.val + ''
      }
      if(node.right === null) {
        return node.val + '(' + inOrderString(node.left) + ')';
      }
      return node.val + '(' + inOrderString(node.left) + ')(' + inOrderString(node.right) + ')';
    }
    
    return inOrderString(root);
  };