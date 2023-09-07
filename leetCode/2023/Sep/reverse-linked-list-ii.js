/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
//https://leetcode.com/problems/reverse-linked-list-ii/description/?envType=daily-question&envId=2023-09-07
var reverseBetween = function(head, left, right) {
    let start = null;
    let end = null;
    let prev = null;
    let next = null;
    
    
    let newNode = new ListNode(-1);
    newNode.next = head;
    head = newNode;
    let current = head;
    while(current !== null && right >= 0) {
        if(left == 0) {
           next = current.next;
           current.next = prev;
           prev = current; 
           current = next;
         
        } else {
            start = current;
            current = current.next;  
            left--;
        }
        
        right--;
    }
    start.next.next = current;
    start.next = prev;
    
    return head.next;
};