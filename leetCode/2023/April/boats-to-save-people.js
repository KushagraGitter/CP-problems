//https://leetcode.com/problems/boats-to-save-people/description/
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let start = 0;
    let end = people.length - 1;
    let count = 0;
    people.sort((a, b) => a - b);
    while(start <= end) {
        if(people[start] + people[end] > limit) {
            end--;
            count++
        } else if (people[start] + people[end] <= limit) {
            start++;
            end--;
            count++
        }
    }

    return count
};

// below is rust conversion 

// impl Solution {
//     pub fn num_rescue_boats(mut people: Vec<i32>, limit: i32) -> i32 {

//         people.sort();
//         let mut iter = people.iter();
//         let mut start = iter.next();
//         let mut end = iter.next_back();
//         let mut count = 0;

//         loop {
//             match (start, end) {
//                 (None, None) => break,
//                 (None, Some(_)) | (Some(_), None) => {
//                     count += 1;
//                     break;
//                 }
//                 (Some(s), Some(b)) if (s + b) <= limit => {
//                     count += 1;
//                     start = iter.next();
//                     end = iter.next_back();
//                 }
//                 (Some(_), Some(_)) => {
//                     count += 1;
//                     end = iter.next_back();
//                 }
//             }
//         }
//         return count; 
//     }
// }