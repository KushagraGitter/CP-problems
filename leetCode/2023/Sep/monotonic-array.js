/**
 * @param {number[]} nums
 * @return {boolean}
 */
//https://leetcode.com/problems/monotonic-array/description/?envType=daily-question&envId=2023-09-29
var isMonotonic = function(array) {
    let isNonDec = true;
     let isNonInc = true;
   
     for(let i = 1; i < array.length; i++) {
       if (array[i - 1] === array[i]) {
         
       }
       else if(array[i - 1] > array[i]) {
         isNonDec = false;
       } else {
         isNonInc = false
       }
     }
   
     return isNonInc || isNonDec ? true : false
   };