/**
 * @param {number[]} nums
 * @return {number[]}
 */
//https://leetcode.com/problems/squares-of-a-sorted-array/?envType=daily-question&envId=2024-03-02
var sortedSquares = function(nums) {
    const squares = nums.map(num => num * num);
    squares.sort((a, b) => a - b);
    return squares;
};