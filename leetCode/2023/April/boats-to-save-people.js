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