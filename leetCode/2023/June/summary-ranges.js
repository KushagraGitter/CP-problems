/**
 * @param {number[]} nums
 * @return {string[]}
 */
//https://leetcode.com/problems/summary-ranges/description/
var summaryRanges = function(nums) {
    let p1 = 0;
    let p2 = 1;
    let result = [];
    if(nums.length == 0)
        return [];
    while(p1 < nums.length && p2 < nums.length) {
        if(nums[p2-1] === nums[p2] - 1 ) {
            p2++;
        } else {
            if(nums[p1] === nums[p2-1]) {
                result.push(`${nums[p1]}`)
            } else {
                result.push(`${nums[p1]}->${nums[p2-1]}`);
            }
            p1 = p2;
            p2++;
        }
    }

    if(p1 === nums.length -1) {
        result.push(`${nums[p1]}`)
    } else {
            result.push(`${nums[p1]}->${nums[p2-1]}`);

    }

    return result;
};