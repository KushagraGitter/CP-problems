function Node(key) {
  this.key = key;
  this.next = null;
}

var MyHashSet = function () {
  this.root = new Node(-1);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  let temp = this.root;
  let newNode = new Node(key);

  if (!this.contains(key)) {
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let temp = this.root;
  while (temp.next !== null) {
    if (temp.next.key === key) {
      temp.next = temp.next.next;
      return;
    }
    temp = temp.next;
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  let temp = this.root;
  while (temp !== null) {
    if (temp.key === key) {
      return true;
    }
    temp = temp.next;
  }

  return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
