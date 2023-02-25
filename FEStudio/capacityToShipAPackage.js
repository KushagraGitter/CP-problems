/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
//https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/
const sm = (a) => a.reduce(((x, y) => x + y), 0);

let a, d;
const shipWithinDays = (weights, days) => {
    a = weights, d = days;
    let sum = sm(a);
    if (d == 1) return sum;
    if (sum % d == 0 && new Set(a).size == 1) return sum / d;
    return BinarySearch(Math.max(...a), Number.MAX_SAFE_INTEGER); // min value should be at least max, otherwise it cannot take max anyway
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};

const possible = (cap) => {
    let needDays = 1, sum = 0;
    for (const x of a) {
        if (sum + x > cap) {
            sum = x;
            needDays++;
        } else if (sum + x == cap) {
            sum = 0;
            needDays++;
        } else {
            sum += x;
        }
    }
    return needDays > d;
};