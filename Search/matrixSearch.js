module.exports = { 
  //param A : array of array of integers
  //param B : integer
  //return an integer
   searchMatrix : function(A, B){
         function BS(start, end, nums) {
             if(start > end) {
                 return -1;
             }
             const mid = Math.floor((start + end) / 2)
             
             if(nums[mid] === B) {
                 return 1;
             } else if(nums[mid] > B) {
                 return BS(start, mid - 1, nums);
             } else if(nums[mid] < B) {
                 return BS(mid + 1, end, nums);
             }
         }
 
         for(let i = 0; i < A.length; i++) {
             if(BS(0, A[i].length - 1, A[i]) > 0) {
                 return 1;
             }
         }
 
         return 0;
   }
 };
 