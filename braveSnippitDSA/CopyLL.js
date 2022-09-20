function CloneLL(head) {
    	
        if(head === null) { return null }
        let cpHead = new Node(head.element)
        let temp = head;
        if(head.next === null) { return cpHead; }
        let temp2 = head, temp1 = head.next;
        temp2.next = cpHead;
        cpHead.next = temp1;

        while(temp1 !== null) {
             //console.log(temp1);
            temp2 = temp1;
            temp1 = temp1.next;
            let newNode = new Node(temp2.element);
            temp2.next = newNode;
            newNode.next = temp1;
            
           
        }
      
        let cpTemp = cpHead;
        while(temp.next.next !== null) {
            cpTemp.random = temp.random ? temp.random.next : null;
            temp.next = temp.next.next 
            cpTemp.next = cpTemp.next.next;
            cpTemp = cpTemp.next;
            temp = temp.next;
           
        }

        return cpHead
}