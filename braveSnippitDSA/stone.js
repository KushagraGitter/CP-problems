var lastStoneWeight = function(stones) {
    //max heap
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
    
    let maxHeapObj = new maxHeap();
    // insert value in heap
    for(let i = 0; i < stones.length; i++) {
        maxHeapObj.insert(stones[i]);
    }
    
    while(maxHeapObj.size > 1) {
        const s1 = maxHeapObj.extractMax();
        const s2 = maxHeapObj.extractMax();
        const diff = s1 - s2;
        if(diff > 0) {
            maxHeapObj.insert(diff);
        }
    }
    
    return maxHeapObj.extractMax();
    
};