https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //     let p1 = 0;
  //     let p2 = 0;
  //     nums1 = nums1.slice(0, n);
  //     let tempArray = [];
  //     while(p1 < nums1.length || p2 < nums2.length) {
  //         if(nums1[p1] === 0) {
  //             p1++;
  //             continue;
  //         }
  //         if(nums1[p1] < nums2[p2]) {
  //             tempArray.push(nums1[p1]);
  //             p1++
  //         } else {
  //             tempArray.push(nums2[p2]);
  //             p2++
  //         }
  //     }

  //     while(p1 < nums1.length) {
  //          tempArray.push(nums1[p1]);
  //             p1++;
  //     }

  //     while(p2 < nums2.length) {
  //          tempArray.push(nums2[p2]);
  //             p2++;
  //     }

  //     for(let i = 0; i < nums1.length; i++) {
  //         nums1[i] = tempArray[i];
  //     }
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else if (p2 >= 0) {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};
