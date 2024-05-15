//https://leetcode.com/problems/boats-to-save-people/?envType=daily-question&envId=2024-05-04
impl Solution {
    pub fn num_rescue_boats(mut people: Vec<i32>, limit: i32) -> i32 {

         people.sort();
        let mut iter = people.iter();
        let mut start = iter.next();
        let mut end = iter.next_back();
        let mut count = 0;

        loop {
            match (start, end) {
                (None, None) => break,
                (None, Some(_)) | (Some(_), None) => {
                    count += 1;
                    break;
                }
                (Some(s), Some(b)) if (s + b) <= limit => {
                    count += 1;
                    start = iter.next();
                    end = iter.next_back();
                }
                (Some(_), Some(_)) => {
                    count += 1;
                    end = iter.next_back();
                }
            }
        }
        return count; 
    }
}

