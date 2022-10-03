//https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
var minCost = function(s, cost) {
    // totalTime: total time needed to make rope colorful;
        // currMaxTime: maximum time of a balloon needed.
        let totalTime = 0, currMaxTime = 0;

        // For each balloon in the array:
        for (let i = 0; i < s.length; ++i) {
            // If this balloon is the first balloon of a new group
            // set the currMaxTime as 0.
            if (i > 0 && s[i] != s[i - 1]) {
                currMaxTime = 0;
            }

            // Increment totalTime by the smaller one.
            // Update currMaxTime as the larger one.
            totalTime += Math.min(currMaxTime, cost[i]);
            currMaxTime = Math.max(currMaxTime, cost[i]);
        }

        // Return totalTime as the minimum removal time.
        return totalTime;
};  