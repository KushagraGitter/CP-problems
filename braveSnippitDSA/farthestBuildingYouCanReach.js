var furthestBuilding = function(heights, bricks, ladders) {
    let maxDiffrence = -Infinity;
    let totalSum = 0;
    for(let i = 1; i < heights.length && totalSum <= bricks; i++) {
        maxDiffrence = Math.max(maxDiffrence, heights[i - 1] - heights[i]);
        totalSum = totalSum + (heights[i] - heights[i - 1] );
    }
};