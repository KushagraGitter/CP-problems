// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : head node of linked list
  //return the head node in the linked list
  mergeTwoLists: function (A, B) {
    let tail = null
    let h3 = new Node(-1)
    tail = h3
    // if(A === null) { return B };
    // if(B === null) { return A };

    // if(A.data > B.data) {
    // 	h3 = B
    // 	tail = h3;
    // 	A = A.next;
    // } else {
    // 	h3 = A
    // 	tail = h3;
    // 	B = B.next;
    // }

    while (A !== null && B !== null) {
      //console.log(A.data, B.data)
      if (A.data > B.data) {
        tail.next = B
        tail = tail.next
        B = B.next
      } else {
        tail.next = A
        tail = tail.next
        A = A.next
      }
    }

    if (A !== null) {
      tail.next = A
    }
    if (B !== null) {
      tail.next = B
    }

    return h3.next
    function append(tail, h) {
      tail.next = h
      tail = tail.next
      h = h.next
    }
  },
}
