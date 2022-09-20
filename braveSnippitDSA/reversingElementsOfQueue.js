 function reversingElOfQ(A, B){
    let stack = [];    
    let returnArray = [];
    function Node(data) {
        this.data = data;
        this.next = null;
    }

    function Queue() {
        this.head  = null;
        this.tail = null;
        this.Q_Size = 0;

        Queue.prototype.enQueue =  function enQueue(data) {
            let newNode = new Node(data);
            if(this.head === null && this.tail === null) {
                this.head = newNode;
                this.tail = this.head;
            } else {
                this.tail.next = newNode;
                this.tail = this.tail.next;
            }
            this.Q_Size++;
        }

        Queue.prototype.dQueue = function dQueue() {
            if(this.head !== null) {
                this.head = this.head.next;
            }
            this.Q_Size--;
        }

        Queue.prototype.first = function first() {
            return this.head.data;
        }

        Queue.prototype.isEmpty = function isEmpty() {
            return this.Q_Size === 0 ? true : false;
        }
    }
    let q = new Queue();
    for(let i = 0; i < A.length; i++) {
        q.enQueue(A[i]);
    }

    let temp = q.head;

    for(let i = 0; i < B; i++) {
        stack.push(temp.data);
        temp = temp.next;
    }

    q.head = temp;
    let q2 = new Queue();
    while(stack.length > 0) {
        q2.enQueue(stack.pop())
    }
   
    q2.tail.next = q.head;
    temp = q2.head;


    while(temp !== null) {
        returnArray.push(temp.data);
        temp = temp.next;
    }

    return returnArray;


    }