/**
 * @param {number[]} nums
 * @return {boolean}
 */
//https://leetcode.com/problems/greatest-common-divisor-traversal/?envType=daily-question&envId=2024-02-25
var canTraverseAllPairs = function(nums) {
    let prime2index = {};
    let index2prime = {};
     for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        for (let j = 2; j * j <= nums[i]; j++) {
            if (temp % j === 0) {
                if (!prime2index[j]) prime2index[j] = [];
                if (!index2prime[i]) index2prime[i] = [];
                prime2index[j].push(i);
                index2prime[i].push(j);
                while (temp % j === 0) temp /= j;
            }
        }
        if (temp > 1) {
            if (!prime2index[temp]) prime2index[temp] = [];
            if (!index2prime[i]) index2prime[i] = [];
            prime2index[temp].push(i);
            index2prime[i].push(temp);
        }
    }

    const visitedIndex = Array(nums.length).fill(false);
    const visitedPrime = {};
    dfs(0, visitedIndex, visitedPrime);

    return visitedIndex.every(val => val);   

    function dfs(index, visitedIndex, visitedPrime) {
    if (visitedIndex[index]) return;
    visitedIndex[index] = true;

    const primes = index2prime[index] || [];
    for (let i = 0; i < primes.length; i++) {
        const prime = primes[i];
        if (visitedPrime[prime]) continue;
        visitedPrime[prime] = true;
        const indexes = prime2index[prime] || [];
        for (let j = 0; j < indexes.length; j++) {
            const index1 = indexes[j];
            if (visitedIndex[index1]) continue;
            dfs(index1, visitedIndex, visitedPrime);
        }
    }
};
};