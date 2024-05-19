/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
//https://leetcode.com/problems/find-the-maximum-sum-of-node-values/?envType=daily-question&envId=2024-05-19
var maximumValueSum = function(nums, k, edges) {
    const n = nums.length;
    const temp = Array.from({ length: n }, () => [-1, -1]);

    // calculate_max -> cur_ind -> cur_index of the tree and is_even represents whether we have already changed (XOR) even or odd number of nodes 
    function calculateMax(curInd, isEven) {
        if (curInd === n) {  // if we go to node which doesn't exist
            return isEven === 1 ? 0 : -Infinity;
        }
        if (temp[curInd][isEven] !== -1) {  // if we've already encountered this state
            return temp[curInd][isEven];
        }

        // checking all possible variants (no XOR or XOR)
        const noXor = nums[curInd] + calculateMax(curInd + 1, isEven);  // we don't change the number of XOR nodes
        const withXor = (nums[curInd] ^ k) + calculateMax(curInd + 1, 1 - isEven);  // we added 1 XORed node

        const mxPossible = Math.max(noXor, withXor);
        temp[curInd][isEven] = mxPossible;
        return mxPossible;
    }

    return calculateMax(0, 1);  // is_even == 1 because we have XORed 0 nodes which is even
};