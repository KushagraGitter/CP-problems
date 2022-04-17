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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let newTreeRoot = new TreeNode(-1);
  let tempRoot = newTreeRoot;

  function inOrder(root) {
    if (root === null) {
      return root;
    }

    inOrder(root.left);
    tempRoot.right = new TreeNode(root.val);
    tempRoot = tempRoot.right;
    inOrder(root.right);
  }
  inOrder(root);
  return newTreeRoot.right;
};
