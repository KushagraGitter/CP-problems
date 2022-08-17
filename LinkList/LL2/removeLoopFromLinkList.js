// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  solve: function (A) {
    let slow = A,
      fast = A
    if (A === null) return null
    let meetingPoint = null

    function getMeetingPoint() {
      while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
          meetingPoint = slow
          return
          //console.log(meetingPoint);
        }
      }
    }

    function findCycleNode() {
      slow = A
      while (slow.next !== meetingPoint.next) {
        slow = slow.next
        meetingPoint = meetingPoint.next
      }
    }

    getMeetingPoint()
    //console.log(meetingPoint);
    if (meetingPoint) {
      findCycleNode()
      meetingPoint.next = null
    }

    return A
  },
}
