/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//https://leetcode.com/problems/remove-nth-node-from-end-of-list/?envType=daily-question&envId=2024-03-03
var removeNthFromEnd = function(head, n) {
    let tempList = new ListNode(0);
        tempList.next = head;
        
        // set variables for next node and current node
        let slow = tempList;
        let fast = tempList;
        
        // set fast to n nodes ahead of slow
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }
        
        // While we haven't reached the end of the list
        // set slow to n nodes behind fast
        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }
        
        // set slow.next to two nodes ahead of slow
        // then return the nth node of the list
        slow.next = slow.next.next;
        return tempList.next;
        
        
        
    };