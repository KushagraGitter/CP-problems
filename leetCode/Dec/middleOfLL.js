//https://leetcode.com/problems/middle-of-the-linked-list/
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
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    let count = 0;

    while(slow.next !== null) {
        count = count + 1;
        slow = slow.next;
    }

    slow = head

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow
};