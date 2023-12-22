//https://leetcode.com/problems/maximum-score-after-splitting-a-string/?envType=daily-question&envId=2023-12-22
var maxScore = function(s) {
    let maxScore = 0;
    let countZerosLeft = 0;
    let countOnesRight = s.split('1').length - 1;

    for (let i = 0; i < s.length - 1; i++) {
        countZerosLeft += s[i] === '0' ? 1 : 0;
        countOnesRight -= s[i] === '1' ? 1 : 0;
        maxScore = Math.max(maxScore, countZerosLeft + countOnesRight);
    }

    return maxScore;
};