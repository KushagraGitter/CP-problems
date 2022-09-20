function specialMeidan(A){
 let set = new Set();

    for(let i = 0; i < A.length; i++) {
        set.add(A[i]);
    }     
    class maxHeap {

    constructor() {
        this.heap = new Array();
        this.size = 0;
    }

    insert(num) {
        this.heap.push(num);
        this.size = this.heap.length;

        if(this.size > 1) {
            let child = this.size - 1
            let parent = Math.floor((child - 1) / 2);
            while(this.heap[parent] < this.heap[child]) {
                let temp = this.heap[parent];
                this.heap[parent] = this.heap[child];
                this.heap[child] = temp;
                child = parent;
                parent = Math.floor((child - 1) / 2);
            }
        }
    }

    extractMax() {
        let maxEl = 0;
        if(this.size > 0) {
            const temp = this.heap[this.size - 1];
            this.heap[this.size - 1] = this.heap[0];
            this.heap[0] = temp;

            maxEl = this.heap.pop();

            let parent = 0;
            let leftChild = Math.floor(parent * 2 + 1);
            let rightChild = Math.floor(parent * 2 + 2);

            while(rightChild <= this.heap.length  && this.heap[parent] < this.heap[leftChild] || this.heap[parent] < this.heap[rightChild]) {

                if(this.heap[rightChild] === undefined || this.heap[leftChild] !== undefined && this.heap[leftChild] > this.heap[rightChild]) {
                    const temp = this.heap[leftChild];
                    this.heap[leftChild] = this.heap[parent];
                    this.heap[parent] = temp;
                    parent = leftChild;
                } else {
                    if(this.heap[rightChild] !== undefined) {
                         const temp = this.heap[rightChild];
                        this.heap[rightChild] = this.heap[parent];
                        this.heap[parent] = temp;
                        parent = rightChild;  
                    }
                }

                 leftChild = Math.floor(parent * 2 + 1);
                 rightChild = Math.floor(parent * 2 + 2);
            }
            this.size = this.heap.length;
        }

        return maxEl;
    }
}

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

function rebalance() {
    if(maxHeapObj.size > minHeapObj.size) {
        const maxEl = maxHeapObj.extractMax();
        minHeapObj.insert(maxEl);
    } else {
        const minEl = minHeapObj.extractMin();
        maxHeapObj.insert(minEl);
    }
}

let maxHeapObj = new maxHeap();
let minHeapObj = new minHeap();
let median = 0;

for(let i = 0; i < A.length - 1; i++) {
    if(A[i] < median) {
        maxHeapObj.insert(A[i]);
    } else {
        minHeapObj.insert(A[i]);
    }

    if(maxHeapObj.size - minHeapObj.size === 1) {
        median = maxHeapObj.heap[0];
    } else if (minHeapObj.size - maxHeapObj.size === 1) {
        median = minHeapObj.heap[0];
    } else if (minHeapObj.size === maxHeapObj.size) {
        median = (maxHeapObj.heap[0] + minHeapObj.heap[0]) / 2;
    } else {
        rebalance();
        median = (maxHeapObj.heap[0] + minHeapObj.heap[0]) / 2;
    }
    if(median === A[i + 1]) {
        return 1;
    }
    
}

    
maxHeapObj = new maxHeap();
minHeapObj = new minHeap();
median = 0;
    

    for(let i = A.length - 1; i > 0; i--) {
        if(A[i] < median) {
            maxHeapObj.insert(A[i]);
        } else {
            minHeapObj.insert(A[i]);
        }

        if(maxHeapObj.size - minHeapObj.size === 1) {
            median = maxHeapObj.heap[0];
        } else if (minHeapObj.size - maxHeapObj.size === 1) {
            median = minHeapObj.heap[0];
        } else if (minHeapObj.size === maxHeapObj.size) {
            median = (maxHeapObj.heap[0] + minHeapObj.heap[0]) / 2;
        } else {
            rebalance();
            median = (maxHeapObj.heap[0] + minHeapObj.heap[0]) / 2;
        }
        if(median === A[i - 1]) {
            return 1;
        }
    
    }

    return 0;
	}