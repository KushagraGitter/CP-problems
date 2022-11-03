//https://leetcode.com/problems/minimum-genetic-mutation/
/**
* @param {string} start
* @param {string} end
* @param {string[]} bank
* @return {number}
*/

/***

T: O(M^N * N^3+ B)
N length of gene :here 8
M number of chars in gene: here 4
B: length of bank
N^3:  When we visit every lock combination, we spend N^3 time enumerating through and constructing each node.
*/
var minMutation = function(start, end, bank) {
    const set = new Set(bank);
    const visited = new Set();
    if(!set.has(end)) {
        return -1;
    }
    const valid = ["A", "C", "G", "T"];
    const nextSteps = (val) => {
        const ans = [];
        for(let i = 0; i < val.length; i++) {
            for(const v of valid) {
                if(v === val[i]) {
                    continue;
                }
                const next = val.slice(0, i) + v + val.slice(i+1);
                if(!visited.has(next)) {
                    ans.push(next);
                }
            }
        }
        return ans;
    };
    const q = [[start, 0]];
    while(q.length) {
        const [curr, turn] = q.shift();
        if(curr === end) {
            return turn;
        }
        const next = nextSteps(curr);
        for(let n of next) {
            if(set.has(n) && !visited.has(n)) {
                visited.add(n);
                q.push([n, turn+1]);
            }
        }
    }
    return -1;
};