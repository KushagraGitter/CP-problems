/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
//https://leetcode.com/problems/partition-list/description/
var partition = function(head, x) {
    if(head === null) return head;
    var beforeStart = null,
        beforeEnd = null,
        afterStart = null,
        afterEnd = null;
    
    while(head) {
        var next = head.next;
        head.next = null;
        if(head.val < x) {
            if(!beforeStart) {
                beforeStart = head;
                beforeEnd = beforeStart;
            } else {
                beforeEnd.next = head;
                beforeEnd = head;
            }
        } else {
            if(!afterStart) {
                afterStart = head;
                afterEnd = afterStart;
            } else {
                afterEnd.next = head;
                afterEnd = head;
            }
        }
        // console.log('+++++');
        // console.log(beforeStart);
        // console.log(beforeEnd);
        // console.log(afterStart);
        // console.log(afterEnd);
        head = next;
    }
    
    if(!beforeStart) {
        return afterStart;
    }
    
    beforeEnd.next = afterStart;
    return beforeStart;
};