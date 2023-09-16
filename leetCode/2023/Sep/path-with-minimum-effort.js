/**
 * @param {number[][]} heights
 * @return {number}
 */
//https://leetcode.com/problems/path-with-minimum-effort/?envType=daily-question&envId=2023-09-16
var minimumEffortPath = function(heights) {
    const rowLen = heights.length;
    const colLen = heights[0].length;
    
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    const visited = new Map();
    
    let heap = new MinHeap();

	// store --> row , col, cost
    heap.insert([0,0,0]);
    
    while (heap.heapSize) {
        const [row, col, cost] = heap.remove();
        
		// if target row,col return cost
        if (row === rowLen - 1 && col === colLen - 1 ) {
            return cost;
        }
        
		// set visited to true
        visited.set((row*colLen) + col, true);
        
        for (const dir of directions) {
            const newRow = row + dir[0];
            const newCol = col + dir[1];
            
			// if out of bound or visited, skip
            if (newRow < 0 || newRow >= rowLen || newCol < 0 || newCol >= colLen || visited.has((newRow*colLen) + newCol)) {
                continue;
            }
            
            const newCost = Math.abs(heights[row][col] - heights[newRow][newCol])

            heap.insert([newRow, newCol, Math.max(cost, newCost)]);
        }
    }
    
    return -1;
};

class MinHeap {
    constructor() {
        this.heapList = [0];
        this.heapSize = 0;
    }
    
    insert = (value) => {
        this.heapList.push(value);
        this.heapSize += 1;
        
        this.moveUp(this.heapSize);
    }
    
    moveUp = (position) => {
        while (Math.floor(position/2)) {
            const parent = Math.floor(position / 2);

            if (this.heapList[parent][2] > this.heapList[position][2]) {
                const temp = this.heapList[position];
                this.heapList[position] = this.heapList[parent];
                this.heapList[parent] = temp;
            }
            position = parent;
        }
    }
    
    remove = () => {
        const minValue = this.heapList[1];
        this.heapList[1] = this.heapList[this.heapSize];
        
        this.heapList.pop();
        this.heapSize -= 1;
        
        this.moveDown(1);
        
        return minValue;
    }
    
    moveDown = (position) => {
        while (position * 2 <= this.heapSize) {
            const minChildPosition = this.findMinChildPosition(position);
            
            if (this.heapList[position][2] > this.heapList[minChildPosition][2]) {
                const temp = this.heapList[minChildPosition];
                this.heapList[minChildPosition] = this.heapList[position];
                this.heapList[position] = temp;
            }
            
            position = minChildPosition
        }
    }
    
    findMinChildPosition = (position) => {
        const leftChild = position * 2;
        const rightChild = (position * 2) + 1;
        
        if ( rightChild > this.heapSize) {
            return leftChild;
        } else {
            if (this.heapList[rightChild][2] < this.heapList[leftChild][2]) {
                return rightChild;
            } else {
                return leftChild;
            }
        }
    }
    
    build = (arrayList) => {
        const len = arrayList.length;
        this.heapSize = len;
        this.heapList = [0, ...arrayList];
        
        let position = Math.floor(len /2);
        
        while (position > 0) {
            this.moveDown(position);
            position -= 1;
        }
    }
}