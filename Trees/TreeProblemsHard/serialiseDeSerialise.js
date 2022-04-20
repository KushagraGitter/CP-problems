/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // we can use level order traversal to store a tree in form of a string
  if (root == null) {
    return '';
  }
  let q = [];
  let serializeStr = '';
  q.push(root);
  serializeStr = root.val;

  while (q.length > 0) {
    const node = q.shift();
    if (node.left) {
      q.push(node.left);
      serializeStr = `${serializeStr}${node.left.val}`;
    } else {
      serializeStr = `${serializeStr}$`;
    }
    if (node.right) {
      q.push(node.right);
      serializeStr = `${serializeStr}${node.right.val}`;
      serializeStr = `${serializeStr}$`;
    }
  }

  return serializeStr;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === '') {
    return null;
  }
  let q = [];
  let dataArray = data.split('');
  let root = new TreeNode(parseInt(dataArray.shift()));

  q.push(root);

  while (q.length > 0 && dataArray.length > 0) {
    const node = q.shift();

    const l = dataArray.shift();

    if (l !== '$' && l !== undefined) {
      node.left = new TreeNode(parseInt(l));
      q.push(node.left);
    }

    const r = dataArray.shift();
    if (r !== '$' && r !== undefined) {
      node.right = new TreeNode(parseInt(r));
      q.push(node.right);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
