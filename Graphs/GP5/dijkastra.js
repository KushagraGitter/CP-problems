module.exports = {
  //param A : integer
  //param B : array of array of integers
  //param C : integer
  //return a array of integers
  solve: function (A, B, C) {
    let adjMat = new Array(A);

    for (let i = 0; i < A; i++) {
      adjMat[i] = new Array(A).fill(Infinity);
    }

    for (let i = 0; i < B.length; i++) {
      const itr = B[i];

      adjMat[itr[0]][itr[1]] = itr[2];
      adjMat[itr[1]][itr[0]] = itr[2];
    }

    function minHeap() {
      this.heap = new Array();
      this.size = 0;
    }

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
      //let min = 0;
      let temp = this.heap[0];
      this.heap[0] = this.heap[size - 1];
      this.heap[size - 1] = temp;
      let min = this.heap.pop();
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

    let minHeapObj = new minHeap();
    let map = new Map();

    for (let i = 0; i < adjMat[C].length; i++) {
      //if(adjMat[source][i] !== -1) {
      map.set(i, adjMat[C][i]);
      if (i === C) {
        map.set(i, 0);
      }
      minHeapObj.insert(adjMat[C][i], i);
      // }
    }

    while (minHeapObj.size > 0) {
      const { n, i } = minHeapObj.extractMin();
      let newsource = i;
      let weigth = n;

      for (let j = 0; j < adjMat[newsource].length; j++) {
        const newWight = weigth + adjMat[newsource][j];

        const existingWeight = map.get(j);

        if (existingWeight !== undefined && newWight < existingWeight) {
          map.set(j, newWight);
          minHeapObj.insert(newWight, j);
        }
      }
    }
    let result = Array.from(map.values());
    for (let i = 0; i < result.length; i++) {
      if (result[i] === Infinity) {
        result[i] = -1;
      }
    }

    minHeapObj = {};
    map = new Map();
    return result;
  },
};
