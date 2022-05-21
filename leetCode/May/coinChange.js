/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let minCoins = new Array(amount + 1).fill(Infinity);
  minCoins[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < minCoins.length; j++) {
      if (coins[i] <= j) {
        minCoins[j] = Math.min(minCoins[j], 1 + minCoins[j - coins[i]]);
      }
    }
  }
  return minCoins[amount] != Infinity ? minCoins[amount] : -1;
};
