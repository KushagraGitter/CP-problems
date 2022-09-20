/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new minHeap();
    this.k = k;
    
    for(let i = 0; i < nums.length; i++) {
        if(this.heap.size < this.k) {
           this.heap.insert(nums[i]); 
        } else {
            if(this.heap.top() < nums[i]) {
                this.heap.extractMin();
                this.heap.insert(nums[i])
            }
        }
        
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    
    if(this.heap.size < this.k) {
        this.heap.insert(val)
    } else {
        if(this.heap.top() < val) {
            this.heap.extractMin();
            this.heap.insert(val)
        }
    }
    return this.heap.top();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

//min heap
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

minHeap.prototype.top = function top() {
    return this.heap[0];
}