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
    let h3 = null,
      tail = null;
    if (A === null) {
      return B;
    }
    if (B === null) {
      return A;
    }

    if (A.data >= B.data) {
      h3 = B;
      B = B.next;
      tail = h3;
      h3.next = A;
      tail = tail.next;
      A = A.next;
    } else {
      h3 = A;
      A = A.next;
      tail = h3;
      h3.next = B;
      tail = tail.next;
      B = B.next;
    }

    while (A !== null && B !== null) {
      if (A.data >= B.data) {
        append(tail, B);
      } else {
        append(tail, A);
      }
    }

    if (A !== null) {
      tail.next = A;
    }
    if (B !== null) {
      tail.next = B;
    }

    function append(tail, h) {
      tail.next = h;
      tail = tail.next;
      h = h.next;
    }
    return h3;
  },
};
