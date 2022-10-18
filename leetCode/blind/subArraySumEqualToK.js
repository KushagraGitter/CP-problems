//https://leetcode.com/problems/subarray-sum-equals-k/
/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
var subarraySum = function(nums, k) {
    let sum = 0;
    let map = new Map()
    map.set(0, 1)
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];

        const endSum = sum - k

        if(map.has(endSum)) {
            count = count + map.get(endSum)
        }
        if(map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1)
        }
    }

    return count
};