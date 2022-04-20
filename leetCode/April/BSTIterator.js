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
 */
// this sol is using O(N) extra space
var BSTIterator = function (root) {
  this.root = root;
  this.q = [];

  this.inOrder = function inOrder(root) {
    if (root === null || root === undefined) {
      return null;
    }

    this.inOrder(root.left);
    this.q.push(root);
    this.inOrder(root.right);
  };
  this.inOrder(this.root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const val = this.q[0].val;
  this.q.shift();
  return val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.q.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
