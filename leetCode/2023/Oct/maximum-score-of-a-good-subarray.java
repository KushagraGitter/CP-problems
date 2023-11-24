//https://leetcode.com/problems/maximum-score-of-a-good-subarray/?envType=daily-question&envId=2023-10-22
class Solution {
    public int maximumScore(int[] nums, int k) {
        int n = nums.length;

        int[] leftBoundary = new int[n]; // Store the next lower element from the left.
        int[] rightBoundary = new int[n]; // Store the next lower element from the right.
        for(int i = 0 ;i < n ; i ++){
            leftBoundary[i] = -1;
            rightBoundary[i] = n ;
        }

        Stack<Integer> leftStack = new Stack<>(); // Monotonic Stack to help calculate left array.
        Stack<Integer> rightStack = new Stack<>(); // Monotonic Stack to help calculate right array.

        // Calculate next lower element from the left.
        for (int i = n - 1; i >= 0; i--) {
            while (!leftStack.empty() && nums[leftStack.peek()] > nums[i]) {
                // If the current element is smaller than elements in the stack,
                // set the left boundary for those elements to the current element's index.
                leftBoundary[leftStack.pop()] = i;
            }
            leftStack.push(i);
        }

        // Calculate next lower element from the right
        for (int i = 0; i < n; i++) {
            while (!rightStack.empty() && nums[rightStack.peek()] > nums[i]) {
                // If the current element is smaller than elements in the stack,
                // set the right boundary for those elements to the current element's index.
                rightBoundary[rightStack.pop()] = i;
            }
            rightStack.push(i);
        }

        int maxScore = 0; // Initialize the maximum score to 0.

        // Calculate the maximum score for good subarrays
        for (int i = 0; i < n; i++) {
            if (leftBoundary[i] < k && rightBoundary[i] > k) {
                // Calculate the score for the subarray that contains element 'k'.
                int subarrayScore = nums[i] * (rightBoundary[i] - leftBoundary[i] - 1);
                maxScore = Math.max(maxScore, subarrayScore); // Update the maximum score.
            }
        }

        return maxScore; // Return the maximum score for a good subarray.
    }
}