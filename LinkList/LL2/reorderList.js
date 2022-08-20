// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  reorderList: function (A) {
    if (A === null || A.next === null || A.next.next === null) {
      return A
    }

    function findMid(node) {
      let slow = node
      let fast = node
      while (fast !== null && fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
      }
      return slow
    }
    function reverse(node) {
      //let temp = node;
      let current = node
      let prev = null
      while (current.next !== null) {
        let temp = current.next
        current.next = prev
        prev = current
        current = temp
      }
      current.next = prev
      return current
    }

    function mergeTwoList(firstHead, secondhead) {
      let dummyhead = new Node(-1)
      let temp = dummyhead

      while (firstHead !== null) {
        temp.next = firstHead
        temp = firstHead
        firstHead = firstHead.next

        if (secondhead !== null) {
          temp.next = secondhead
          temp = secondhead
          secondhead = secondhead.next
        }
      }

      return dummyhead.next
    }

    const mid = findMid(A)
    const firstHead = A
    const secondhead = reverse(mid.next)
    mid.next = null
    return mergeTwoList(firstHead, secondhead)
  },
}

// public ListNode merge(ListNode firsthead,ListNode secondhead)
// {

//     ListNode dummyhead=new ListNode(10);
//     ListNode temp=dummyhead;
//     while(firsthead!=null)
//     {
//         temp.next=firsthead;
//         temp=firsthead;
//         firsthead=firsthead.next;

//         if(secondhead!=null)
//         {
//         temp.next=secondhead;
//         temp=secondhead;
//         secondhead=secondhead.next;
//         }

//     }
//     return dummyhead.next;
// }
