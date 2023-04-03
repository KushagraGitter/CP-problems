// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
//update
module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  solve: function (A) {
    let count = 1;
    let temp = A;
    if (A === null) {
      return null;
    }
    if (temp.next === null) {
      return null;
    }
    while (temp.next !== null) {
      temp = temp.next;
      count++;
    }

    let middle = Math.floor(count / 2);
    // if(count % 2 === 0) {
    middle = middle + 1;
    // }
    //console.log(middle)
    // find the value at middle position
    temp = A;
    let pos = 1;
    while (temp !== null) {
      if (pos === middle - 1) {
        //console.log(pos)
        temp.next = temp.next.next;
        return A;
      } else {
        temp = temp.next;
        pos++;
      }
    }
  },
};
