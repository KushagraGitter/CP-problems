//https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteMiddle = function(head) {
    let slow = head;
    let fast = head;
    let midCount = 0
    
    if(head.next === null) {
        return null
    }
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        midCount++;
    }
    
    let prev = null,  curr = head;
    let count = 0;
    while(curr) {
        if(midCount === count) {
            prev.next = curr.next
        }
        prev = curr;
        curr = curr.next;
        count++
    }
    
    return head
};