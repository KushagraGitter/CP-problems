/**
 * @param {number[]} ratings
 * @return {number}
 */
//https://leetcode.com/problems/candy/description/?envType=daily-question&envId=2023-09-13
var candy = function(ratings) {
    const n = ratings.length;
    let candies = new Array(n).fill(1);
    
    for(let i = 1; i < n; i++) {
        if(ratings[i - 1] < ratings[i]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    
    let sum = candies[n - 1];
    
    for(let j = n - 2; j >=0; j--) {
        if(ratings[j] > ratings[j + 1]) {
            candies[j] = Math.max(candies[j], candies[j + 1] + 1);
        }
        sum = sum + candies[j];
    }
    
    return sum;
    updateupdate 2
};