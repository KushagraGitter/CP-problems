//https://leetcode.com/problems/number-of-good-pairs/description/?envType=daily-question&envId=2023-10-03
class Solution {
    public int numIdenticalPairs(int[] nums) {
        int count = 0;
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] == nums[j]) {
                    count++;
                }
            }
        }
        return count;
    }
}