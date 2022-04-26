//https://leetcode.com/problems/min-cost-to-connect-all-points/

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const n = points.length;
  const dist = [];
  const graph = [...Array(n)].map((_, i) => i);
  let totalDist = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      dist.push([distance, i, j]);
    }
  }

  dist.sort((a, b) => a[0] - b[0]);

  function find(id) {
    if (graph[id] === id) return id;
    graph[id] = find(graph[id]);
    return graph[id];
  }

  for (let [d, u, v] of dist) {
    const rootU = find(u);
    const rootV = find(v);
    if (rootU === rootV) continue;
    graph[rootV] = rootU;
    totalDist += d;
  }
  return totalDist;
};
