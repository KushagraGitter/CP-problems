// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
    //param A : head node of linked list
    //param B : head node of linked list
    //return the head node in the linked list
       addTwoNumbers : function(A, B){
            let carry = 0;
       
       
       let newList = new Node(-1);
       let temp = newList;
        while(A !== null && B !== null) {
            
            let sum = A.data + B.data + carry;
            carry = Math.floor(sum/10);
            sum = sum % 10;
            
            temp.next = new Node(sum);
            temp = temp.next;
            A = A.next;
            B = B.next;
        }
       
        while(A !== null) {
            let sum = A.data + carry;
            carry = Math.floor(sum/10);
            sum = sum % 10;
            
            temp.next = new Node(sum);
            temp = temp.next;
            A = A.next;
        }
       
       while(B !== null) {
           let sum = B.data + carry;
            carry = Math.floor(sum/10);
            sum = sum % 10;
            
            temp.next = new Node(sum);
            temp = temp.next;
            B = B.next;
        }
       
       if(carry !== 0) {
           temp.next = new Node(carry);
       }
       
       return newList.next
       }
   };
   