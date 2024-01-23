/**
 * @param {number[]} arr
 * @return {number}
 */
//https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/?envType=daily-question&envId=2023-12-11
var findSpecialInteger = function(arr) {
    let size = arr.length;
    let qtr = Math.floor(size / 4);
    let cnt = 1;
    let p = arr[0];

    for (let i = 1; i < size; i++) {
        if (p === arr[i]) {
            cnt++;
        } else {
            cnt = 1;
        }

        if (cnt > qtr) {
            return arr[i];
        }

        p = arr[i];
    }

    return p;

};