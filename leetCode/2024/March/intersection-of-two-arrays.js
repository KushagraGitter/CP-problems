/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//https://leetcode.com/problems/intersection-of-two-arrays/submissions/1199794406/?envType=daily-question&envId=2024-03-10
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    return Array.from(new Set([...set1].filter(x => set2.has(x))));
};