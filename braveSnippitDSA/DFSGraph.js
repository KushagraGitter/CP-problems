B = [
  [10, 29],
  [5, 9],
  [13, 43],
  [72, 79],
  [42, 56],
  [5, 32],
  [18, 76],
  [16, 31],
  [29, 64],
  [6, 14],
  [25, 52],
  [26, 53],
  [26, 40],
  [71, 87],
  [11, 94],
  [38, 44],
  [10, 83],
  [9, 70],
  [11, 75],
  [36, 86],
  [84, 92],
  [16, 89],
  [17, 27],
  [38, 89],
  [63, 92],
  [13, 65],
  [72, 88],
  [5, 59],
  [2, 30],
  [51, 68],
  [16, 45],
  [31, 67],
  [65, 78],
  [59, 92],
  [36, 68],
  [34, 63],
  [46, 72],
  [2, 55],
  [37, 54],
  [75, 89],
  [36, 53],
  [22, 64],
  [25, 45],
  [5, 40],
  [38, 83],
  [41, 69],
  [68, 75],
  [19, 44],
  [28, 51],
  [23, 74],
  [20, 39],
  [63, 85],
  [88, 93],
  [26, 45],
  [2, 18],
  [74, 87],
  [15, 67],
  [32, 66],
  [54, 85],
  [35, 89],
  [9, 11],
  [29, 66],
  [13, 42],
  [19, 41],
  [16, 68],
  [15, 23],
  [3, 81],
  [15, 27],
  [14, 92],
  [11, 59],
  [37, 39],
  [4, 29],
  [22, 25],
  [84, 90],
  [21, 50],
  [12, 60],
  [36, 50],
  [30, 36],
  [51, 87],
  [13, 26],
  [21, 43],
  [79, 92],
  [70, 92],
  [32, 45],
  [34, 55],
  [11, 90],
  [28, 91],
  [36, 89],
  [22, 77],
  [10, 61],
  [1, 18]
]

// let adjMat = new Map();

// for(let i = 0; i < A.length; i++) {
//     if(adjMat.get(A[i][0]) === undefined) 
//         adjMat.set(A[i][0], []);
//         adjMat.get(A[i][0]).push(A[i][1])

//    if(adjMat.get(A[i][1]) === undefined) 
//         adjMat.set(A[i][1], []);
//         adjMat.get(A[i][1]).push(A[i][0])
// }

// let visMap = new Map();
//  Array.from(adjMat.keys()).forEach((item) => {
//     visMap.set(item, false)
//  })
   
  
// let mapArray  = Array.from(adjMat.keys());

// function dfs(adjMat, vis, s) {
//     if(vis.get(s) === true) return true;

//     vis.set(s, true);

//     for(let i = 0; i < adjMat.get(s).length; i++) {
//         dfs(adjMat, vis, adjMat.get(s)[i]);
//     }

//     return vis;
// }

// //number of connected components  
// //start
// let count  = 0;
// //let mapArray  = Array.from(adjMat.keys());
// //mapArray.unshift(0);

// for([key, value] of visMap.entries()) {
//    if(value === false) {
//       dfs(adjMat, visMap, key);
//       count++;
//    }
   
// }

// //end

// console.log(count);


 function isCyclePresent(A, B){

        let adjMat = new Map();

        for(let i = 0; i < B.length; i++) {
            if(adjMat.get(B[i][0]) === undefined) 
                adjMat.set(B[i][0], []);
                adjMat.get(B[i][0]).push(B[i][1])

        if(adjMat.get(B[i][1]) === undefined) 
                adjMat.set(B[i][1], []);
                adjMat.get(B[i][1]).push(B[i][0])
        }

  let visMap = new Map();
   Array.from(adjMat.keys()).forEach((item) => {
      visMap.set(item, false)
   })
     
    
  let mapArray  = Array.from(adjMat.keys());
  
  function dfs(adjMat, vis, s) {
      if(vis.get(s) === true) return true;
  
      vis.set(s, true);
  
      for(let i = 0; i < adjMat.get(s).length; i++) {
          dfs(adjMat, vis, adjMat.get(s)[i]);
      }
  
      return vis;
  }
  
  //number of connected components  
  //start
  let count  = 0;
  //let mapArray  = Array.from(adjMat.keys());
  //mapArray.unshift(0);
  
  for([key, value] of visMap.entries()) {
     if(value === false) {
        dfs(adjMat, visMap, key);
        count++;
     }
     
  }

        return A - count === B.length ? 0 : 1;
	}

