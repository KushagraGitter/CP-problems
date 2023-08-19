/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
//https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
var search = function(nums, target) {
    function search1(arr, l, h, key)
    {
        if (l > h)
            return -1;
      
        let mid = parseInt((l + h) / 2, 10);
        if (arr[mid] == key)
            return mid;
      
        // The tricky case, just update left and right
        if ((arr[l] == arr[mid])
            && (arr[h] == arr[mid]))
        {
            ++l;
            --h;
            return search1(arr, l, h, key)
        }
      
        // If arr[l...mid] is sorted
        if (arr[l] <= arr[mid])
        {
      
            // As this subarray is sorted, we can quickly
            // check if key lies in any of the halves
            if (key >= arr[l] && key <= arr[mid])
                return search1(arr, l, mid - 1, key);
      
            // If key does not lie in the first half
            // subarray then divide the other half
            // into two subarrays such that we can
            // quickly check if key lies in the other half
            return search1(arr, mid + 1, h, key);
        }
      
        // If arr[l..mid] first subarray is not sorted
        // then arr[mid... h] must be sorted subarray
        if (key >= arr[mid] && key <= arr[h])
            return search1(arr, mid + 1, h, key);
      
        return search1(arr, l, mid - 1, key);
    }
    
    return search1(nums, 0, nums.length - 1, target) >= 0 ? true : false
};