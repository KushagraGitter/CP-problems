/**
 * @param {number[]} nums
 * @return {number}
 */
// /https://leetcode.com/problems/single-element-in-a-sorted-array/
var singleNonDuplicate = function(A) {
    let uniqueNumber = 0;
  for (let i = 0; i < A.length; i++) {
    uniqueNumber = BigInt(uniqueNumber) ^ BigInt(A[i]);
  }
  return parseInt(uniqueNumber);   
};