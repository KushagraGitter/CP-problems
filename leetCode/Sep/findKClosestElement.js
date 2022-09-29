//https://leetcode.com/problems/find-k-closest-elements/
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    
    let lo = 0;
       let hi = arr.length - 1;
       while (hi - lo >= k) {
           if (Math.abs(arr[lo] - x) > Math.abs(arr[hi] - x)) {
               lo++;
           } else {
               hi--;
           }
       }
       let result = new Array();
       for (let i = lo; i <= hi; i++) {
           result.push(arr[i]);
       }
       return result;
   
};


