//https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  if (!cloned) return;
  if (cloned.val == target.val) {
    return cloned;
  } else {
    return (
      getTargetCopy(original, cloned.left, target) ||
      getTargetCopy(original, cloned.right, target)
    );
  }
};
