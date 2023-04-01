//https://leetcode.com/problems/binary-search/description/
impl Solution {
    fn binSearch(mut start: i32, mut end: i32, nums: Vec<i32>, target: i32) -> i32 {
        if start > end {
            return -1
        }

        let mut mid  = (start + end) / 2;
        if nums[mid as usize] == target {
           return mid;
        } else if nums[mid as usize] > target {
            end = mid - 1;
        } else {
            start = start + 1;
        }

        Solution::binSearch(start, end, nums, target)
    }
pub fn search(nums: Vec<i32>, target: i32) -> i32 {

    Solution::binSearch(0, (nums.len() - 1) as i32, nums, target) 
}


}