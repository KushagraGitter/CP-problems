/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
 //https://leetcode.com/problems/maximal-network-rank/description/
 var maximalNetworkRank = function(n, roads) {
    let degree = new Array(n).fill(0);
    let roadSet = new Set();

    for (let road of roads) {
        degree[road[0]]++;
        degree[road[1]]++;
        roadSet.add(road[0] + ',' + road[1]);
        roadSet.add(road[1] + ',' + road[0]);
    }

    let maxRank = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            let rank = degree[i] + degree[j];
            if (roadSet.has(i + ',' + j)) {
                rank--;
            }
            maxRank = Math.max(maxRank, rank);
        }
    }

    return maxRank;
};