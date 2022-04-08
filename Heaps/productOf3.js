module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    class maxHeap {
      constructor() {
        this.heap = new Array();
        this.size = 0;
      }

      insert(num) {
        this.heap.push(num);
        this.size = this.heap.length;

        if (this.size > 1) {
          let child = this.size - 1;
          let parent = Math.floor((child - 1) / 2);
          while (this.heap[parent] < this.heap[child]) {
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
        if (this.size > 0) {
          const temp = this.heap[this.size - 1];
          this.heap[this.size - 1] = this.heap[0];
          this.heap[0] = temp;

          maxEl = this.heap.pop();

          let parent = 0;
          let leftChild = Math.floor(parent * 2 + 1);
          let rightChild = Math.floor(parent * 2 + 2);

          while (
            (rightChild <= this.heap.length &&
              this.heap[parent] < this.heap[leftChild]) ||
            this.heap[parent] < this.heap[rightChild]
          ) {
            if (
              this.heap[rightChild] === undefined ||
              (this.heap[leftChild] !== undefined &&
                this.heap[leftChild] > this.heap[rightChild])
            ) {
              const temp = this.heap[leftChild];
              this.heap[leftChild] = this.heap[parent];
              this.heap[parent] = temp;
              parent = leftChild;
            } else {
              if (this.heap[rightChild] !== undefined) {
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

    for (let i = 0; i < 3; i++) {
      maxHeapObj.insert(A[i]);
    }

    for (let i = 0; i < A.length; i++) {
      if (i < 2) {
        A[i] = -1;
      } else {
        const max1 = maxHeapObj.extractMax();
        const max2 = maxHeapObj.extractMax();
        const max3 = maxHeapObj.extractMax();

        A[i] = max1 * max2 * max3;

        maxHeapObj.insert(max1);
        maxHeapObj.insert(max2);
        maxHeapObj.insert(max3);

        if (A[i + 1]) {
          maxHeapObj.insert(A[i + 1]);
        }
      }
    }

    return A;
  },
};
