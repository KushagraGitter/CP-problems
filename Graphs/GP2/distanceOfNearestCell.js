module.exports = { 
    //param A : array of array of integers
    //return a array of array of integers
       solve : function(A){
           let visited = new Array(A.length).fill().map(() => new Array(A[0].length).fill(0));
           let result =  new Array(A.length).fill().map(() => new Array(A[0].length).fill(Infinity));
           let path = [{x:0, y:1}, {x:1, y:0}, {x:0, y:-1}, {x:-1, y:0}];
   
           let q = [];
   
           for(let i = 0; i < A.length; i++) {
               for(let j = 0; j < A[0].length; j++) {
                   if(A[i][j] === 1) {
                       q.push({i:i, j:j, distance:0})
                       result[i][j] = 0
                       visited[i][j] = 1
                   }
               }
           }
   
           while(q.length > 0) {
               const {i, j, distance} = q.shift()
               for(let k = 0; k < 4; k++) {
                   const newX = i + path[k].x;
                   const newY = j + path[k].y
                   if(newX < A.length && newX > -1 && newY < A[0].length && newY > -1 && visited[newX][newY] === 0) {
                       q.push({i: newX, j: newY, distance: distance + 1})
                       visited[newX][newY] = 1;
                   }
               }
               result[i][j] = Math.min(result[i][j], distance)
           }
           return result
       }
   };
   