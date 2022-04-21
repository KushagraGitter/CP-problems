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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root == null) {
    return [];
  }
  let q = [];
  let stack = [];
  let size = 0;
  q.push(root);

  while (q.length > 0) {
    size = q.length;
    let temArray = [];

    while (size > 0) {
      let node = q.shift();

      temArray.push(node.val);

      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }

      size--;
    }
    if (temArray.length > 0) {
      stack.push(temArray);
    }
  }

  return stack.reverse();
};
