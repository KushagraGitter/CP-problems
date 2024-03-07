/**
 * @param {number[]} nums
 * @return {number}
 */
//https://leetcode.com/problems/majority-element/?envType=daily-question&envId=2024-02-12
var majorityElement = function(nums) {
    let freqMap = new Map();

    for(let i =0; i < nums.length; i++) {
        if(freqMap.has(nums[i])) {
            const freq = freqMap.get(nums[i]);
            freqMap.set(nums[i], freq + 1)
        } else {
            freqMap.set(nums[i], 1);
        }
    }

    for(const [key, value] of freqMap) {
        if(value > (nums.length /2)) {
            return key
        }
    }
};