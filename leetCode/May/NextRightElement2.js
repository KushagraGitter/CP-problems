//https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let curr = root;

  while (curr != null) {
    let start = null; // (1)
    let prev = null;

    while (curr != null) {
      // (2)
      if (start == null) {
        // (3)
        if (curr.left) start = curr.left;
        else if (curr.right) start = curr.right;

        prev = start; // (4)
      }

      if (prev != null) {
        if (curr.left && prev != curr.left) {
          prev = prev.next = curr.left; // (5)
        }
        if (curr.right && prev != curr.right) {
          prev = prev.next = curr.right;
        }
      }

      curr = curr.next; // (6)
    }

    curr = start; // (7)
  }

  return root;
};

/*
Additional Comments:

(1) Used as a marker for the beginning of the next level

(2) Traverse nodes left to right at current level until there are no more nodes to traverse

(3) We have not found the beginning of the next level

(4) If both curr.left and curr.right are null, then start will stay null and prev will also stay null

(5) JavaScript operator associativity for the equal sign (=) is right to left. 
So first we set prev.next to curr.left and then re-assign prev to prev.next which is curr.left

(6) Move to the next node

(7) Traverse down to the next level

*/
