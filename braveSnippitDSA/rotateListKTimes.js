var rotateRight = function(head, k) {
    let temp = head;
    
    if(head === null || head.next === null) {
        return head;
    }
    
    if(k == 0) {
        return head;
    }
    
    while(temp.next) {
        temp = temp.next;
    }
        
    temp.next = head;
    
    for(let i = 0; i < k ; i++) {
        head = head.next;
        temp = temp.next;
    }
    
    temp.next = null;
    
    return head;
};

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 let head = new ListNode(1);
 head.next = new ListNode(2);
 head.next.next = new ListNode(3);
 head.next.next.next = new ListNode(4);
 head.next.next.next.next = new ListNode(5);


 rotateRight(head, 2);