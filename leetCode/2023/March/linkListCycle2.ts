/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
//https://leetcode.com/problems/linked-list-cycle-ii/submissions/912245330/
type ListNode = {
    val: number
    next: ListNode | null
}
function detectCycle(head: ListNode | null): ListNode | null {
    if(!head || head.val === 100500)
        return head;

    head.val = 100500;

    return detectCycle(head.next);
};