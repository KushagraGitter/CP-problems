
/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function (houses, cost, m, n, target) {
  let memo = {}
  let res = dfs(0, target)
  return res === Infinity ? -1 : res

  function dfs(index, neighbourhoodsLeft, lastColor) {
    let key = `${index},${neighbourhoodsLeft},${lastColor}`

    // have no more houses to assign
    if (index === houses.length && neighbourhoodsLeft !== 0) {
      return Infinity
    }

    if (memo[key] !== undefined) {
      return memo[key]
    }

    // if there's no neighbourhoods left, try to paint the rest of houses to same color
    if (neighbourhoodsLeft === 0) {
      let c = 0
      while (index < houses.length) {
        // impossible to paint the rest to same color, return early
        if (houses[index] !== 0 && houses[index] !== lastColor) {
          return Infinity
        }

        if (houses[index] === 0) {
          c += cost[index][lastColor - 1]
        }

        index++
      }

      return c
    }

    // leave it as is
    if (houses[index] !== 0) {
      let res = dfs(
        index + 1,
        neighbourhoodsLeft - (houses[index] === lastColor ? 0 : 1),
        houses[index],
      )
      memo[key] = res
      return res
    }

    let min = Infinity
    // paint it with different colors
    for (let color = 1; color <= n; color++) {
      min = Math.min(
        min,
        cost[index][color - 1] +
          dfs(
            index + 1,
            neighbourhoodsLeft - (color === lastColor ? 0 : 1),
            color,
          ),
      )
    }

    memo[key] = min
    return min
  }
}
