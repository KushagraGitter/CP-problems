var furthestBuilding = function(heights, bricks, ladders) {
    const n = heights.length;
    let jumpHeight = 0;
    function minHeap() {
      this.heap = new Array();
      this.size = 0;
    }
    //min heap with index
    minHeap.prototype.insert = function insert(n, i) {
      let size = 0;
      let point = {
        n: n,
        i: i,
      };
      this.heap.push(point);
      size = this.heap.length;

      if (size > 1) {
        let childIndex = size - 1;
        let parent = Math.floor((childIndex - 1) / 2);
        while (
          childIndex >= 1 &&
          this.heap[parent].n > this.heap[childIndex].n
        ) {
          let temp = this.heap[parent];
          this.heap[parent] = this.heap[childIndex];
          this.heap[childIndex] = temp;
          childIndex = parent;
          parent = Math.floor((childIndex - 1) / 2);
        }
      }
      this.size = this.heap.length;
    }; //[5, 17, 100, 11]

    minHeap.prototype.extractMin = function extractMin() {
      let size = this.size;
      let min = 0;
      let temp = this.heap[0];
      this.heap[0] = this.heap[size - 1];
      this.heap[size - 1] = temp;
      min = this.heap.pop();
      this.size = size - 1;
      let i = 0;

      while (
        i * 2 + 2 <= this.size &&
        ((this.heap[i * 2 + 1] && this.heap[i].n > this.heap[i * 2 + 1].n) ||
          (this.heap[i * 2 + 2] && this.heap[i].n > this.heap[i * 2 + 2].n))
      ) {
        if (
          this.heap[i * 2 + 2] === undefined ||
          (this.heap[i * 2 + 1] !== undefined &&
            this.heap[i * 2 + 2].n > this.heap[i * 2 + 1].n)
        ) {
          let temp = this.heap[i * 2 + 1];
          this.heap[i * 2 + 1] = this.heap[i];
          this.heap[i] = temp;

          i = i * 2 + 1;
        } else {
          if (this.heap[i * 2 + 2]) {
            let temp = this.heap[i * 2 + 2];
            this.heap[i * 2 + 2] = this.heap[i];
            this.heap[i] = temp;
          }
          i = i * 2 + 2;
        }
      }

      return min;
    };
    
    minHeap.prototype.top = function top() {
        return this.heap[this.heap.length - 1]
    }
    
    let heapObj = new minHeap();
    
    let i = 0;
    // considering we have used firts l ladders 
    while(i < n - 1 && heapObj.size < ladders) {
        if(heights[i + 1] - heights[i] > 0) {
            heapObj.insert(heights[i + 1] - heights[i]);
        }
        i++;
    }
    
    while(i < n - 1) {
        jumpHeight = heights[i + 1] - heights[i];
        if(jumpHeight > 0) {
            if(heapObj.size > 0 && heapObj.top().n < jumpHeight) {
                const topEl = heapObj.extractMin().n;
                bricks = bricks - topEl;
                heapObj.insert(jumpHeight);
            } else {
                bricks = bricks - jumpHeight;
            }
        }
        if(bricks < 0) {
            return i;
        }
        i++;
    }
    
    return i;
    
};