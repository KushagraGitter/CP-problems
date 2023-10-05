//https://leetcode.com/problems/majority-element-ii/?envType=daily-question&envId=2023-10-05
public class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> result = new ArrayList<>();
        Set<Integer> uniqueNums = new HashSet<>();
        for (int num : nums) {
            uniqueNums.add(num);
        }
        for (int num : uniqueNums) {
            int count = 0;
            for (int n : nums) {
                if (n == num) {
                    count++;
                }
            }
            if (count > nums.length / 3) {
                result.add(num);
            }
        }
        return result;
    }
}