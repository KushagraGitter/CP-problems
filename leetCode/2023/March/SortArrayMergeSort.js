/**
 * @param {number[]} nums
 * @return {number[]}
 */
//https://leetcode.com/problems/sort-an-array/description/
//update
var sortArray = function(nums) {
    function merge(arr1, arr2) {
        let result = [];
        let p1 = 0;
        let p2 = 0;

        while(p1 < arr1.length && p2 < arr2.length) {
            if(arr1[p1] < arr2[p2]) {
                result.push(arr1[p1])
                p1++
            } else {
                result.push(arr2[p2]) 
                p2++
            }
        }

            while(p1 < arr1.length) {
                result.push(arr1[p1])
                p1++
            }

            while(p2 < arr2.length) {
                result.push(arr2[p2])
                p2++
            }

        return result    
    }

    function divide(arr, start, end) {
        if(start < end) 
        {
        let mid = Math.floor((start + end) / 2)

        let left = divide(arr, start, mid)
        let right = divide(arr, mid  + 1, end)

        return merge(left, right)
        }
        return arr.slice(start, end + 1)
        
    }

    return divide(nums, 0, nums.length - 1)

};  