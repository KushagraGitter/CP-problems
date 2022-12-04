//https://leetcode.com/problems/minimum-average-difference/
let minimumAverageDifference = function(nums) {
    let n = nums.length;
    let ans = -1;
    let minAvgDiff = Number.MAX_SAFE_INTEGER;

    // Generate prefix and suffix sum arrays.
    let prefixSum = Array(n + 1).fill(0);
    let suffixSum = Array(n + 1).fill(0);

    for (let index = 0; index < n; ++index) {
        prefixSum[index + 1] = prefixSum[index] + nums[index];
    }

    for (let index = n - 1; index >= 0; --index) {
        suffixSum[index] = suffixSum[index + 1] + nums[index];
    }

    for (let index = 0; index < n; ++index) {
        // Calculate average of left part of array, index 0 to i.
        let leftPartAverage = prefixSum[index + 1];
        leftPartAverage = Math.floor(leftPartAverage / (index + 1));

        // Calculate average of right part of array, index i+1 to n-1.
        let rightPartAverage = suffixSum[index + 1];
        // If right part have 0 elements, then we don't divide by 0.
        if (index != n - 1) {
            rightPartAverage = Math.floor(rightPartAverage / (n - index - 1));
        }

        let currDifference = Math.abs(leftPartAverage - rightPartAverage);
        // If current difference of averages is smaller,
        // then current index can be our answer.
        if (currDifference < minAvgDiff) {
            minAvgDiff = currDifference;
            ans = index;
        }
    }

    return ans;
};