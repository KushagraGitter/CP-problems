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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
//https://leetcode.com/problems/add-one-row-to-tree/?envType=daily-question&envId=2024-04-16
var addOneRow = function(root, val, depth) {
    if(depth===1){
          let newNode = new TreeNode(val);
          newNode.left = root;
          return newNode;
      }
      let queue=[],item,node,d=1,newNode;
      queue.push([root,1]);
      while(queue.length>0){
          item = queue.shift();
          node = item[0];
          d = item[1];
          if(d===depth-1){
              let origLeft = node.left;
              node.left = new TreeNode(val);
              node.left.left = origLeft ;
              let origRight = node.right;
              node.right = new TreeNode(val);
              node.right.right = origRight ;   
          }else{
              if(node.left!==null){
                  queue.push([node.left,d+1]);
              }
              if(node.right!==null){
                  queue.push([node.right,d+1]);
              }
          }
      }
      return root;