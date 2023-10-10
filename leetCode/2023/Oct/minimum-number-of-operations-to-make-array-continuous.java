//https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/?envType=daily-question&envId=2023-10-10
class Solution {
    public int minOperations(int[] nums) {
        int maxi = 0; // Initialize a variable to store the maximum count of consecutive numbers
        int count = 0; // Initialize a variable to keep track of the current count of consecutive numbers
        int n = nums.length - 1; // Calculate the maximum possible difference between numbers
        int l = 0; // Initialize a variable to keep track of the modified length of the 'nums' array

        Arrays.sort(nums); // Sort the input array 'nums' in ascending order

        // Remove duplicates in 'nums' and update 'l' with the modified length
        for (int i = 0; i < nums.length; i++) {
            if (i + 1 < nums.length && nums[i] == nums[i + 1]) {
                continue;
            }
            nums[l++] = nums[i];
        }

        // Calculate the maximum count of consecutive numbers
        for (int i = 0, j = 0; i < l; i++) {
            while (j < l && (nums[j] - nums[i]) <= n) {
                count++;
                j++;
            }
            maxi = Math.max(maxi, count);
            count--;
        }

        // Calculate and return the minimum number of operations needed to make the numbers consecutive
        return nums.length - maxi;
    }
}