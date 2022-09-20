function Node(data) {
    this.data = data;
    this.next = null;
}

function Queue() {
    let head  = null;
    let tail = null;
     this.Q_Size = 0;

    Queue.prototype.enQueue =  function enQueue(data) {
        let newNode = new Node(data);
        if(head === null && tail === null) {
            head = newNode;
            tail = head;
        } else {
            tail.next = newNode;
            tail = tail.next;
        }
        this.Q_Size++;
    }

    Queue.prototype.dQueue = function dQueue() {
        if(head !== null) {
            head = head.next;
        }
        this.Q_Size--;
    }

    Queue.prototype.first = function first() {
        return head.data;
    }
 
    Queue.prototype.isEmpty = function isEmpty() {
        return this.Q_Size === 0 ? true : false;
    }
}

function reverseNumAndConcatinate(num) {
    let strNum = num.toString();
    let returnNumber  =  parseInt(strNum + Array.from(strNum).reverse().toString().replaceAll(',',''));
    return returnNumber;
}


function NIntegersContaining123(A) {
    let one = 1;
    let two = 2;
    let returnArray = [];
    let q = new Queue();
    let count = 0;    
    let initialNum = 0;
    while (count < A) {
        q.enQueue(initialNum*10 + 1);
        
        q.enQueue(initialNum*10 + 2);

        initialNum = q.first();
        if(reverseNumAndConcatinate(initialNum).toString().length % 2 === 0) {
            count = count + 1;
        }
        q.dQueue();
        
    }
    return reverseNumAndConcatinate(initialNum).toString();
}
