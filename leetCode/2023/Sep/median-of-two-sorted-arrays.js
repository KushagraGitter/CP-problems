/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//https://leetcode.com/problems/median-of-two-sorted-arrays/description/?envType=daily-question&envId=2023-09-21
var findMedianSortedArrays = function(nums1, nums2) {
    var mergeArray =   merge(nums1, nums2);
    var median = Math.floor(mergeArray.length/2);
   
   if(mergeArray.length%2 ==0){
       return (mergeArray[median] + mergeArray[median-1])/2;
   }else{
       return mergeArray[median];
   }
   
};

var merge = function(arr1, arr2){
   var mergedArray = [];
   var leftArrayIndex = 0;
   var rightArrayIndex = 0;
   
   while(leftArrayIndex < arr1.length && rightArrayIndex < arr2.length){
       if(arr1[leftArrayIndex] > arr2[rightArrayIndex]){
           mergedArray.push(arr2[rightArrayIndex]);
           rightArrayIndex++;
       }else{
           mergedArray.push(arr1[leftArrayIndex]);
           leftArrayIndex++;
       }
     
   }
     
       while(arr1.length > leftArrayIndex){
               mergedArray.push(arr1[leftArrayIndex]);
               leftArrayIndex++;
             }
       
       while(arr2.length > rightArrayIndex){
               mergedArray.push(arr2[rightArrayIndex]);
               rightArrayIndex++;
             }
   return mergedArray;
   
}