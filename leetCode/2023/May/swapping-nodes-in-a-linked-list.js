/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/
var swapNodes = function(head, k) {
    let temp = head;
  let kNode = null;
  let count= 1;
  let totalCount = 1;
  let kNodeFromLast = null;
  
  if(head === null || head.next == null) {
      return head;
  } 
  
  while(temp.next !== null) {
      totalCount++;
      temp = temp.next;
  }
  
  temp = head;
  
  let nodeFromLast = totalCount - k + 1;
  
  while(temp !== null) {
      if(count == k) {
          kNode = temp;
      }
      if(count == nodeFromLast) {
          kNodeFromLast = temp;
      }
      temp = temp.next;
      count++;
  }
  
  const tempVal = kNode.val;
  kNode.val = kNodeFromLast.val;
  kNodeFromLast.val = tempVal
  
  return head;
};