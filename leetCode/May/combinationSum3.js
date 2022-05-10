/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let returnArray = [];
  let subSet = [];

  function generate(subSet, index, sum) {
    if (sum === n && subSet.length === k) {
      returnArray.push([...subSet]);
      return;
    }

    if (subSet.length === k) {
      return;
    }
    // if (index === 9 && sum !== n) {
    //   return;
    // }

    for (i = index; i <= 9; i++) {
      subSet.push(i);
      generate(subSet, index + 1, sum + i);
      subSet.pop();
      generate(subSet, index + 1, sum);
    }
  }

  generate(subSet, 1, 0);
  return returnArray;
};
