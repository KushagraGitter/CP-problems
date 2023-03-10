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
//https://leetcode.com/problems/linked-list-random-node/description/
type ListNode = {
    val: number;
    next: ListNode;
} | null
class Solution {
    private roulette: number[];

    constructor(head: ListNode | null) {
        this.roulette = [];
        let currIter: ListNode = head;

        while (currIter) {
            this.roulette.push(currIter.val);
            currIter = currIter.next;
        }
    }

    getRandom(): number {   
        const luckyNumber = ~~(Math.random() * this.roulette.length);

        return this.roulette[luckyNumber] ?? -1;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */