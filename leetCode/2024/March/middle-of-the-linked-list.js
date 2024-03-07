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
//https://leetcode.com/problems/middle-of-the-linked-list/?envType=daily-question&envId=2024-03-07
var middleNode = function(head) {
    let count = 0 ;
    let middle= 0;
    let tempHead = head;
    if(head === null) {
        return null
    }

    while(head) {
        head = head.next;
        count++;
    }
    if(count % 2 === 0) {
        middle = (count / 2) + 1
    } else {
        middle = Math.ceil(count / 2)
    }

    while(middle > 1) {
        tempHead = tempHead.next;
        middle--
    }

    return tempHead;
};

// slow fast pointer 
// var middleNode = function(head) {
//     let slowPointer = head;
//     let fastPointer = head;

//     while (fastPointer !== null && fastPointer.next !== null) {
//         slowPointer = slowPointer.next;
//         fastPointer = fastPointer.next.next;
//     }

//     return slowPointer;
// };