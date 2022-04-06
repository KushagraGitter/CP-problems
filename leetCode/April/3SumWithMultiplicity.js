/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  // we can use two pointers to solve the question for pair, if we break the poblem and for i we can find {j, k}
  let retArr = [];
  let ans = 0;
  let mod = 1000000007;
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = arr.length - 1;
    const t = target - arr[i];

    while (j < k) {
      if (arr[j] + arr[k] < t) {
        j++;
      } else if (arr[j] + arr[k] > t) {
        k--;
      } else if (arr[j] !== arr[k]) {
        let left = 1;
        let right = 1;

        while (j + 1 < k && arr[j] === arr[j + 1]) {
          j++;
          left++;
        }

        while (k - 1 >= 0 && arr[k - 1] === arr[k]) {
          k--;
          right++;
        }

        ans = ans + left * right;
        ans = ans % mod;
        j++;
        k--;
      } else {
        ans = ans + ((k - j + 1) * (k - j)) / 2;
        ans = ans % mod;
        break;
      }
    }
  }

  return ans;
};
