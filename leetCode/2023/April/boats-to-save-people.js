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

// fn num_rescue_boats(people: Vec<usize>, limit: usize) -> usize{
//     let mut start: usize = 0;
//     let mut end: usize = people.len();
//     let mut count:usize = 0;

//     people.sort();

//     while start <= end {
//         if people[start] + people[end] > limit {
//             end -= 1;
//             start += 1;
//         } else if people[start] + people[end] <= limit {
//             start += 1;
//             end  -= 1;
//             count += 1;
//         }
//     }

//     return count;
// }
