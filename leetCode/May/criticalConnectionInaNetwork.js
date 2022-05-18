//need to rework this problem after the graph class
//https://leetcode.com/problems/critical-connections-in-a-network/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
 var criticalConnections = function(n, connections) {
  const adj = [...Array(n)].map((_) => []);
  for (const [a, b] of connections) {
    adj[a].push(b);
    adj[b].push(a);
  }

  criticals = [];

  function dfs(u, parent = -1, rank = 0, ranks = Array(n).fill(-1)) {
    ranks[u] = rank;

    for (const neighbour of adj[u]) {
      if (neighbour === parent) continue;
      // the node is not yet discovered
      if (ranks[neighbour] === -1) {
        ranks[u] = Math.min(ranks[u], dfs(neighbour, u, rank + 1, ranks));
      } else {
        ranks[u] = Math.min(ranks[u], ranks[neighbour]);
      }
    }

    if (u && ranks[u] === rank) {
      criticals.push([u, parent]);
    }

    return ranks[u];
  }

  dfs(0);

  return criticals;
};