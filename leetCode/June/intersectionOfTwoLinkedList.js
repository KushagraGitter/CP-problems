//https://leetcode.com/problems/intersection-of-two-linked-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  //let hMapA = new Map();
  
  let tempA = headA;
  let tempB = headB;
//     let intersectingValue = null;
  
//     while(tempA !== null) {
//         hMapA.set(tempA, tempA.val);
//         tempA = tempA.next;
//     }
  
//     while(tempB !== null) {
//         if(hMapA.get(tempB) === tempB.val) {
//             intersectingValue = tempB;
//             //console.log(tempB.val)
//             break;
//         }
//         tempB = tempB.next;
//     }
  
//     return intersectingValue;
  
  
  //space optimisation with 2 pointers 
  
  while(tempA !== tempB) {
      tempA = tempA === null ? headB : tempA.next;
      tempB = tempB === null ? headA : tempB.next;
  }
  
  return tempA;
  
  
};
