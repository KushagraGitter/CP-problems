/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
//https://leetcode.com/problems/find-the-town-judge/?envType=daily-question&envId=2024-02-22
var findJudge = function(N, trust) {
    const inDegree = new Array(N + 1).fill(0);
    const outDegree = new Array(N + 1).fill(0);
    for (let a of trust) {
        outDegree[a[0]]++;
        inDegree[a[1]]++;
    }
    for (let i = 1; i <= N; ++i) {
        if (inDegree[i] === N - 1 && outDegree[i] === 0)
            return i;
    }
    return -1;
};

