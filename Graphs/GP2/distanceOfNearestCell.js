module.exports = { 
    //param A : array of array of integers
    //return a array of array of integers
       solve : function(A){
           let visited = new Array(A.length).fill().map(() => new Array(A[0].length).fill(0));
           let result =  new Array(A.length).fill().map(() => new Array(A[0].length).fill(Infinity));
           let path = [{x:0, y:1}, {x:1, y:0}, {x:0, y:-1}, {x:-1, y:0}];
   
           let q = new Queue();
   
           for(let i = 0; i < A.length; i++) {
               for(let j = 0; j < A[0].length; j++) {
                   if(A[i][j] === 1) {
                       q.push([i, j , 0])
                       result[i][j] = 0
                       visited[i][j] = 1
                   }
               }
           }
   
           while(q.size > 0) {
               const [i, j, distance] = q.pop()
               for(let k = 0; k < 4; k++) {
                   const newX = i + path[k].x;
                   const newY = j + path[k].y
                   if(newX < A.length && newX > -1 && newY < A[0].length && newY > -1 && visited[newX][newY] === 0) {
                       q.push([newX, newY,distance + 1])
                       visited[newX][newY] = 1;
                   }
               }
               result[i][j] = Math.min(result[i][j], distance)
           }
           return result
       }
   };
   class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
        this.size = 0;
    }

    push(ele) {
        this.elements[this.tail] = ele;
        this.tail++;
        this.size++;
    }

    pop() {
        if(this.head === this.tail) return undefined;
        let ele = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        this.size--;
        return ele;
    }
}   