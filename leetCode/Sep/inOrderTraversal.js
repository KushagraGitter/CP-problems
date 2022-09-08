//https://leetcode.com/problems/binary-tree-inorder-traversal/
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = []

  function inOrder(node) {
    if (node === null) {
      return
    }

    inOrder(node.left)
    result.push(node.val)
    inOrder(node.right)
  }

  inOrder(root)

  return result
}
