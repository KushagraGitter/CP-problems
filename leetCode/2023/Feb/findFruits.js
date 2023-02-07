//https://leetcode.com/problems/fruit-into-baskets/description/
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const n = fruits.length;
    let fArray = new Array(n).fill(0);
    let start = 0;
    let ans = 0;
    let k = 2;

    for(let i = 0; i < n; i++) {
        if(fArray[fruits[i]] === 0) k--;
        fArray[fruits[i]]++;

        while(k < 0) {
            fArray[fruits[start]]--;
            if(fArray[fruits[start]] == 0) k++;
            start++;
        }

        ans = Math.max(i - start + 1, ans);
    }

    return ans
};