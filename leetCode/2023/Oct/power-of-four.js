//https://leetcode.com/problems/power-of-four/?envType=daily-question&envId=2023-10-23
const isPowerOfFour = num => {
    if (num === 0) return false;
    else if (num === 1) return true;
    if (!Number.isInteger(num / 4)) return false;
    return isPowerOfFour(num / 4);
};