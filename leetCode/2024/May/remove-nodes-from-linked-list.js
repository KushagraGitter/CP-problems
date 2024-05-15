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
//https://leetcode.com/problems/remove-nodes-from-linked-list/?envType=daily-question&envId=2024-05-06
var removeNodes = function(head) {
    if (!head) {
        return null;
    }
    let node = head;
    let nxtGreater = removeNodes(node.next);

    node.next = nxtGreater;
    if (!nxtGreater || node.val >= nxtGreater.val) {
        return node;
    }
    return nxtGreater;
};