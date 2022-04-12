module.exports = { 
  //param A : array of integers
  //param B : integer
  //return a array of integers
   solve : function(A, B){
 
         function minHeap() {
             this.heap = new Array();
             this.size = 0;
         }
 
         minHeap.prototype.insert = function insert(n) {
             let size = 0;
 
             this.heap.push(n);
             size = this.heap.length;
 
             if(size > 1) {
                 let childIndex = size - 1;
                 let parent = Math.floor((childIndex - 1)/2);
                 while(childIndex >= 1 && this.heap[parent] > this.heap[childIndex] ) {
                     let temp = this.heap[parent];
                     this.heap[parent] = this.heap[childIndex];
                     this.heap[childIndex] = temp;
                     childIndex = parent;
                     parent = Math.floor((childIndex - 1)/2)  
                 }   
             }
             this.size = this.heap.length;
         }//[5, 17, 100, 11]
 
         minHeap.prototype.extractMin = function extractMin() {
             let size  = this.size;
             let min = 0;
             let temp = this.heap[0];
             this.heap[0] = this.heap[size - 1];
             this.heap[size - 1] = temp;
             min = this.heap.pop();
             this.size = size - 1;
             let i = 0;
 
             while( i*2 + 2 <= this.size && this.heap[i] > this.heap[i*2 + 1] || this.heap[i] > this.heap[i*2 + 2]) {
 
                 if(this.heap[i*2 + 2] === undefined || this.heap[i*2 + 1] !== undefined && this.heap[i*2 + 2] > this.heap[i*2 + 1]) {
 
                     let temp = this.heap[i*2 + 1];
                     this.heap[i*2 + 1] = this.heap[i];
                     this.heap[i] = temp;
 
                     i = i*2 + 1;
                 } else {
                     if(this.heap[i*2 + 2]) {
                     let temp = this.heap[i*2 + 2];
                         this.heap[i*2 + 2] = this.heap[i];
                         this.heap[i] = temp;
                     }
                     i = i*2 + 2;  
                 }
             }
 
             return min;
         }
 
         let minHeapObj = new minHeap();
         let replaceIndex = 0;
         for(let i = 0; i <= B; i++) {
             minHeapObj.insert(A[i]);
         }
 
         for(let j = B + 1; j < A.length; j++) {
             const min = minHeapObj.extractMin();
             minHeapObj.insert(A[j]);
             A[replaceIndex] = min;
             replaceIndex++;
         }
 
         for(let k = 0; k <= B; k++) {
             const min  = minHeapObj.extractMin();
             A[replaceIndex] = min;
             replaceIndex++;
         }
 
         return A;
   }
 };
 