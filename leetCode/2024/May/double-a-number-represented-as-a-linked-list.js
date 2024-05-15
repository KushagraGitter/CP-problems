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
//https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/?envType=daily-question&envId=2024-05-07
var doubleIt = function(head) {
    var twice = function(head) {
        if (!head) {
            return 0;
        }
        var doubledValue = head.val * 2 + twice(head.next);
        head.val = doubledValue % 10;
        return Math.floor(doubledValue / 10);
    };

    var carry = twice(head);
    if (carry > 0) {
        head = new ListNode(carry, head);
    }
    return head;
};