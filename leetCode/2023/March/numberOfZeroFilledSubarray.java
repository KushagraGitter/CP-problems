
//https://leetcode.com/problems/number-of-zero-filled-subarrays/description/
class Solution {
       public long zeroFilledSubarray(int[] nums) {
        long cnt = 0, zeroSubarraysEndingAtCurrentIndex = 0;
        for (int n : nums) {
            if (n == 0) {
                cnt += ++zeroSubarraysEndingAtCurrentIndex;
            }else {
                zeroSubarraysEndingAtCurrentIndex = 0;
            }
        }
        return cnt;
    }

}