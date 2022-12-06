//https://leetcode.com/problems/odd-even-linked-list/description/?q=JavaScript&orderBy=most_relevant
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
var oddEvenList = function(head) {
    if (!head) return head;
    let currentOdd = head;
    let evenHead = head.next;
    let currentEven = evenHead;
    while(currentEven && currentEven.next) {
        currentOdd.next = currentEven.next;
        currentOdd = currentOdd.next;
        currentEven.next = currentOdd.next;
        currentEven = currentEven.next;
    }
    currentOdd.next = evenHead;
    return head;
};