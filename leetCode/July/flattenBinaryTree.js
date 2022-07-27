//https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let nextOne = null

  const update = node => {
    if (!node) return node

    update(node.right)
    update(node.left)
    node.right = nextOne
    node.left = null
    nextOne = node
  }

  update(root)
}
