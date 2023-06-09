//https://leetcode.com/problems/find-smallest-letter-greater-than-target/
impl Solution {
    pub fn next_greatest_letter(letters: Vec<char>, target: char) -> char {
        let first_letter = letters[0];
        for s in letters {
            if s > target {
                return s
            }
        }

        return first_letter;
    }
}