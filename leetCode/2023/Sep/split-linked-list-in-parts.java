/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
//https://leetcode.com/problems/split-linked-list-in-parts/description/?envType=daily-question&envId=2023-09-06

class Solution {
    public ListNode[] splitListToParts(ListNode head, int k) {
        int length = 0;
        ListNode temp = head;
        while (temp != null) {
            length++;
            temp = temp.next;
        }

        int partSize = length / k;
        int extra = length % k;

        ListNode[] result = new ListNode[k];
        temp = head;
        for (int i = 0; i < k; i++) {
            result[i] = temp;
            int currentPartSize = partSize + (extra-- > 0 ? 1 : 0);
            for (int j = 0; j < currentPartSize - 1; j++) {
                temp = temp.next;
            }
            if (temp != null) {
                ListNode next = temp.next;
                temp.next = null;
                temp = next;
            }
        }
        return result;
    }
}