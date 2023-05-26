/**
 * @param {number[]} salary
 * @return {number}
 */
//https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/
var average = function(salary) {
    salary.sort((a, b) => a - b);
    let totalSalary = 0;
    for(let i = 1; i < salary.length - 1; i++) {
        totalSalary = totalSalary + salary[i]
    }

    return totalSalary / (salary.length - 2)
};