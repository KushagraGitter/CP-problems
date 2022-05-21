// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
let root = new Node();
let size_of_ll = 0;
class LinkedList {
  constructor() {
    root = null;
    size_of_ll = 0;
  }

  insert_node(position, value) {
    let temp = new Node(0);
    temp.data = value;
    if (position == 1) {
      temp.next = root;
      root = temp;
    } else {
      let count = 1;
      let prev = root;
      while (count < position - 1) {
        prev = prev.next;
        count++;
      }
      temp.next = prev.next;
      prev.next = temp;
    }
    size_of_ll++;
  }

  delete_node(position) {
    if (position >= 1 && position <= size_of_ll) {
      let temp = null;
      if (position == 1) {
        temp = root;
        root = root.next;
      } else {
        let count = 1;
        let prev = root;
        while (count < position - 1) {
          prev = prev.next;
          count++;
        }
        temp = prev.next;
        prev.next = prev.next.next;
      }
      size_of_ll--;
    }
  }
  print_ll() {
    let temp = root;
    let flag = 0;
    while (temp != null) {
      if (flag == 0) {
        process.stdout.write(temp.data);
        flag = 1;
      } else process.stdout.write(' ' + temp.data);
      temp = temp.next;
    }
    process.stdout.write('\n');
  }
}
