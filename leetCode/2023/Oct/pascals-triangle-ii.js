//https://leetcode.com/problems/pascals-triangle-ii/?envType=daily-question&envId=2023-10-16
var getRow = function(row) {
    let result = [];
    let start = 1;
    result.push(start);
    for (let i = 0; i < row; i++) {
        start *= (row - i);
        start /= (i + 1);
        result.push(start);
    }
    return result;
};
