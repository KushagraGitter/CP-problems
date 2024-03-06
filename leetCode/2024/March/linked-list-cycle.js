/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fastP = head;
    let slowP = head;

    if(head === null || head.next === null)
        return false;

    while(fastP && fastP.next) {
        
        slowP = slowP.next;
        fastP = fastP.next.next;
        if(fastP === slowP) {
            return true
        }
    }

    return false    
};