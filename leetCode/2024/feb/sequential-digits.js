/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
//https://leetcode.com/problems/sequential-digits/?envType=daily-question&envId=2024-02-02
var sequentialDigits = function(low, high) {
    const a = [];

        for (let i = 1; i <= 9; ++i) {
            let num = i;
            let nextDigit = i + 1;

            while (num <= high && nextDigit <= 9) {
                num = num * 10 + nextDigit;
                if (low <= num && num <= high) {
                    a.push(num);
                }
                ++nextDigit;
            }
        }

        a.sort((a, b) => a - b);
        return a;
};