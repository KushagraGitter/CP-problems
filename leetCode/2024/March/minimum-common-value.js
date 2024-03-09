/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let num2Set = new Set(nums2);
    let result = -1;
    for(let i = 0; i < nums1.length; i++) {
        if(num2Set.has(nums1[i])) {
           result = nums1[i];
            break;
        }
    }

    return result;
};