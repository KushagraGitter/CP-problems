/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
//https://leetcode.com/problems/find-the-difference-of-two-arrays/description/
var findDifference = function(nums1, nums2) {
    let set1 = new Set([...nums1]);
    let set2 = new Set([...nums2]);

    let result = [];
    let temp1 = [];
    let temp2 = []
    for(const key of set1) {
        if(!set2.has(key)) {
            temp1.push(key);
        }
    }

    for(const key of set2) {
        if(!set1.has(key)) {
            temp2.push(key);
        }
    }
    result.push(temp1);
    result.push(temp2);
    return result;
};