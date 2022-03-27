/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  const destA = [];
  const cost = [];
  let count = Math.floor(costs.length / 2);

  for (let i = 0; i < costs.length; i++) {
    destA.push(costs[i][0]);
  }
  for (let i = 0; i < costs.length; i++) {
    cost.push(costs[i][1] - costs[i][0]);
  }

  while (count > 0) {
    let max = Math.min(...cost);
    let index = cost.indexOf(max);
    destA.splice(index, 1);
    destA.splice(index, 0, costs[index][1]);
    cost[index] = Infinity;
    count--;
  }

  return destA.reduce((a, b) => a + b);
};
