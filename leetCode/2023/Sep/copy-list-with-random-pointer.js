/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
//https://leetcode.com/problems/copy-list-with-random-pointer/submissions/?envType=daily-question&envId=2023-09-05
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head == null) return null;
   
    let orig = head;
   
    while(orig !== null) {
        let temp = orig.next;
        
        orig.next = new Node(orig.val);
        orig.next.next = temp;
        orig = orig.next.next;
    }    
   
   orig = head;
   
   while(orig !== null) {
       if(orig.random !== null) {
            orig.next.random = orig.random ? orig.random.next : orig.random;
       }
       
       orig = orig.next.next;
   }
   
   orig = head;
   let copy = orig.next;
   temp = copy;
   
   while(orig !== null || copy !== null) {
       orig.next = orig.next !== null ? orig.next.next : orig.next;
       copy.next = copy.next !== null ? copy.next.next : copy.next;
       
       copy = copy.next;
       orig = orig.next;
   }
   
   return temp;
       
};