// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  sortList: function (A) {
    function sortedMerge(a, b) {
      var result = null
      /* Base cases */
      if (a == null) return b
      if (b == null) return a

      /* Pick either a or b, and recur */
      if (a.data <= b.data) {
        result = a
        result.next = sortedMerge(a.next, b)
      } else {
        result = b
        result.next = sortedMerge(a, b.next)
      }
      return result
    }

    function mergeSort(h) {
      // Base case : if head is null
      if (h == null || h.next == null) {
        return h
      }

      // get the middle of the list
      var middle = getMiddle(h)
      var nextofmiddle = middle.next

      // set the next of middle node to null
      middle.next = null

      // Apply mergeSort on left list
      var left = mergeSort(h)

      // Apply mergeSort on right list
      var right = mergeSort(nextofmiddle)

      // Merge the left and right lists
      var sortedlist = sortedMerge(left, right)
      return sortedlist
    }

    // Utility function to get the middle
    // of the linked list
    function getMiddle(head) {
      if (head == null) return head

      var slow = head,
        fast = head

      while (fast.next != null && fast.next.next != null) {
        slow = slow.next
        fast = fast.next.next
      }
      return slow
    }
    return mergeSort(A)
  },
}
