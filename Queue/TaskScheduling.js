// Problem Description

// A CPU has N tasks to be performed. It is to be noted that the tasks have to be performed in a specific order to avoid deadlock. In every clock cycle the CPU can either perform a task or move it to the back of the queue. You are given the current state of the scheduler queue in an array A and the required order of the tasks in an array B.

// Determine the minimum number of clock cycles to complete all the tasks.

module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //return an integer
       solve : function(A, B){
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
           for(let j = 0; j < A.length; j++) {
               q.enQueue(A[j]);
           }
           let temp = q.head;
           let cycle = 0;
           for(let i = 0; i < B.length; i++) {
               
               while(B[i] !== q.head.data) {
                    let first  = q.first();
                       q.dQueue();
                       q.enQueue(first);
                       cycle++;
               }
   
               if(B[i] === q.head.data) {
                   q.dQueue();
                    cycle++;
               }
           }
   
           return cycle;
       }
   };
   