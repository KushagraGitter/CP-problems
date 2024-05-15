/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//https://leetcode.com/problems/delete-node-in-a-linked-list/?envType=daily-question&envId=2024-05-05
var deleteNode = function(node) {
    let curr = node;
    let prev = null;
    
    while(curr.next) {
        curr.val = curr.next.val
        prev = curr
        curr = curr.next
    }
    if(prev) {
        prev.next = null
    }
};