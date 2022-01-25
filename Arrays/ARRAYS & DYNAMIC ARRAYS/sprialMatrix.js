module.exports = { 
    //param A : integer
    //return a array of array of integers
       generateMatrix : function(A){
             let n = A;
       let dir = 0;
       let matrix = [...Array(A)].map(() => Array(A).fill(0));
       let i = 0,
         j = 0,
         k = 1;
       while (k <= n * n) {
         matrix[i][j] = k++;
         if (dir == 0) {
           j++;
           if (j == n || matrix[i][j] != 0) (dir = 1), j--, i++;
         } else if (dir == 1) {
           i++;
           if (i == n || matrix[i][j] != 0) (dir = 2), i--, j--;
         } else if (dir == 2) {
           j--;
           if (j < 0 || matrix[i][j] != 0) (dir = 3), j++, i--;
         } else if (dir == 3) {
           i--;
           if (i < 0 || matrix[i][j] != 0) (dir = 0), i++, j++;
         }
       }
       return matrix;
       }
   };