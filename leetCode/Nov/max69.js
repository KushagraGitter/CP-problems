//https://leetcode.com/problems/maximum-69-number/
/**
* @param {number} num
* @return {number}
*/
var maximum69Number  = function(num) {
    let arr = [...String(num)];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "6") {
            arr[i] = "9";
            return parseInt(arr.join(""));
        }
    }
    return num;
};
