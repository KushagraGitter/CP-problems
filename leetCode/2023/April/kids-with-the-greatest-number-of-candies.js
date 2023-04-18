/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/
var kidsWithCandies = function(candies, extraCandies) {
    let max = -Infinity;
    let result = new Array(candies.length).fill(false);

    for(let i = 0; i < candies.length; i++) {
        max = Math.max(max, candies[i])
    }

    for(let i = 0; i < candies.length; i++) {
        if(max <= candies[i] + extraCandies) {
            result[i] = true; 
        }
    }

    return result;
};