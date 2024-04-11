/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
//https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/?envType=daily-question&envId=2024-04-08
var countStudents = function(students, sandwiches) {
    const count = [0, 0];
    students.forEach(student => count[student]++);
    
    for (let i = 0; i < sandwiches.length; ++i) {
        if (count[sandwiches[i]] === 0)
            return sandwiches.length - i;
        count[sandwiches[i]]--;
    }
    
    return 0;
};