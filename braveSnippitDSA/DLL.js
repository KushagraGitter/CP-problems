class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkList {
  constructor(node) {
    this.head = node;
    this.ll_size = 1;
  }

  inset_start(node) {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  inset_end(node) {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = node;
    node.prev = temp;
    temp = node;
  }

  delete_start() {
    this.head = this.head.next;
    this.head.prev = null
  }

  delete_end() {
    let last = this.head;
    while(last.next !== null) {
      last = last.next;
    }
    last.prev.next = null;
    last.prev = null
  }

  first() {
    return this.head;
  }

  last() {
    let last = this.head;
    while(last.next !== null) {
      last = last.next;
    }
    return last;
  }
}