function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
var reverseBetween = function(head, left, right) {
    let start = null;
    let end = null;
    let prev = null;
    let next = null;
    
    
    let newNode = new ListNode(-1);
    newNode.next = head;
    head = newNode;
    let current = head;
    while(current !== null && right >= 0) {
        if(left == 0) {
           next = current.next;
           current.next = prev;
           prev = current; 
           current = next;
         
        } else {
            start = current;
            current = current.next;  
            left--;
        }
        
        right--;
    }
    start.next.next = current;
    start.next = prev;
    
    return head.next;
};

let newNode = new ListNode(1);
newNode.next = new ListNode(2);
newNode.next.next = new ListNode(3);

newNode.next.next.next = new ListNode(4);

newNode.next.next.next.next = new ListNode(5);

reverseBetween(newNode, 2, 4)
