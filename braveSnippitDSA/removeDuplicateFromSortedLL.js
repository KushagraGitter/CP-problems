var deleteDuplicates = function(head) {
   
    let dummyNode = new ListNode(-1);
    dummyNode.next = head;
    head = dummyNode;
    
    let temp1 = head;
    let temp2 = temp1;
    
    while(temp1 !== null || temp2 !== null) {
        if(temp2.next !== null && temp2.next.next !== null && temp2.next.val === temp2.next.next.val) {
            temp2 = temp2.next.next;
        } else if (temp2.next !== null && temp2.val === temp2.next.val) {
            temp2 = temp2.next;
        }
        else {
            temp2 = temp2.next;
            temp1.next = temp2;
            temp1 = temp1.next;
        }
    }
    
    
    
    return head.next;
};