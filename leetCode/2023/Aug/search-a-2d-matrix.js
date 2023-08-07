/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length;   
    let m = matrix[0].length;
//     function bs(start, end, row) {
//         if(start > end ) {
//             return false;
//         }
        
//         const mid = Math.floor((start + end) / 2);
        
//         if(row[mid] === target) {
//             return true;
//         } else if (row[mid] > target) {
//             return bs(start, mid - 1, row);
//         } else if (row[mid] < target) {
//             return bs(mid + 1, end, row)
//         }
//     }
    
//     for(let j = 0; j < matrix.length; j++) {
//         if(bs(0, matrix[j].length - 1, matrix[j])) {
//             return true;
//         }
//     }
    
//     return false;
    
    
    // optimal solution by convertind 2d array into liner array without extra space
    
        function bs(start, end) {
        if(start > end ) {
            return false;
        }
        
        const mid = Math.floor((start + end) / 2);
            // to convert the value from 2d array to liner array index
        const value = matrix[Math.floor(mid/m)][mid%m];
            
        if(value === target) {
            return true;
        } else if (value > target) {
            return bs(start, mid - 1);
        } else if (value < target) {
            return bs(mid + 1, end)
        }
    }
    
  return  bs(0, m*n - 1)
};