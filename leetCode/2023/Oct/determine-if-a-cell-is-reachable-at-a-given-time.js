/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
//https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/?envType=daily-question&envId=2023-11-08
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    const xDist = Math.abs(sx - fx);
    const yDist = Math.abs(sy - fy);

    if (xDist === 0 && yDist === 0) {
        return t !== 1;
    }

    return xDist <= t && yDist <= t
};