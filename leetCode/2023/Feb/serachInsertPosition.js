/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//https://leetcode.com/problems/search-insert-position/description/
var searchInsert = function(arr, num) {
    if(!arr || arr.length === 0) return -1; 
     if(num < arr[0]) return 0;
     let start = 0;
     let end = arr.length;
     let mid;
     while( start + 1 < end ) {
         mid = start + Math.floor((end - start) / 2);
         console.log(mid)
         if(num === arr[mid]) {
             return mid;
         } else if (num < arr[mid]){
             end = mid;
         } else {
             start = mid;
         }
     }
     if (num === arr[end]) return end;
     if (arr[end] < num) return end + 1;
     if ( num === arr[start] ) return start;
     return start + 1;
 };