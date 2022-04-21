// // Definition for a  binary tree node
// //    function TreeNode(data){
// //      this.data = data
// //      this.left = null
// //      this.right = null
// //    }

// module.exports = {
//  //param A : root node of tree
//  //return a array of integers
// 	solve : function(A){
//         let S = [];
//         let Q = [];
//         let returnArray  = [];
//         let node  = A;
//         Q.push(node);

//         // Do something like normal
//         // level order traversal order.Following
//         // are the differences with normal
//         // level order traversal
//         // 1) Instead of printing a node,
//         // we push the node to stack
//         // 2) Right subtree is visited before left subtree
//         while (Q.length != 0)
//         {
//             /* Dequeue node and make it root */
//             node = Q.shift();
//             S.push(node.data);

//             /* Enqueue right child */
//             if (node.right != null)
//                 // NOTE: RIGHT CHILD IS ENQUEUED BEFORE LEFT
//                 Q.push(node.right);

//             /* Enqueue left child */
//             if (node.left != null)
//                 Q.push(node.left);
//         }

//         // Now pop all items from stack
//         // one by one and print them
//         // while (S.length != 0)
//         // {
//         //     node = S.pop();
//         //     returnArray.push(node.data);

//         // }

//         return S.reverse();
//     }
// };

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length == 0) return 'Underflow';
    return this.items.pop();
  }
  top() {
    return this.items[this.items.length - 1];
  }
  empty() {
    return this.items.length == 0;
  }
  printStack() {
    var str = '';
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + ' ';
    return str;
  }
  clear() {
    this.items = [];
  }
}

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}
module.exports = {
  //param A : root node of tree
  //return a array of integers
  solve: function (A) {
    let st = new Stack();
    let q = new Queue();
    q.enqueue(A);
    while (q.length > 0) {
      let temp = q.peek();
      q.dequeue();
      st.push(temp);

      if (temp.right) q.enqueue(temp.right);
      if (temp.left) q.enqueue(temp.left);
    }
    let answer = [];
    while (st.empty() == false) {
      answer.push(st.top().data);
      st.pop();
    }

    return answer;
  },
};
