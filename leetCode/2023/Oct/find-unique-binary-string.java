//https://leetcode.com/problems/find-unique-binary-string/?envType=daily-question&envId=2023-11-16
class Solution {
    public String findDifferentBinaryString(String[] nums) {
        StringBuilder sb = new StringBuilder();

        for(int i=0;i<nums.length;i++)
        {
            sb.append(nums[i].charAt(i) == '0'? "1": "0");
        }
        return new String(sb);
    }
}