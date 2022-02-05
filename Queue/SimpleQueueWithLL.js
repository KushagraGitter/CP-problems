function Node(data) {
    this.data = data;
    this.next = null;
}

function Queue() {
    let head  = null;
    let tail = null;
    let Q_Size = 0;

    Queue.prototype.enQueue =  function enQueue(data) {
        let newNode = new Node(data);
        if(head === null && tail === null) {
            head = newNode;
            tail = head;
        } else {
            tail.next = newNode;
            tail = tail.next;
        }
        Q_Size++;
    }

    Queue.prototype.dQueue = function dQueue() {
        if(head !== null) {
            head = head.next;
        }
        Q_Size--;
    }

    Queue.prototype.first = function first() {
        return head.data;
    }

    Queue.prototype.isEmpty = function isEmpty() {
        return Q_Size === 0 ? true : false;
    }
}

 