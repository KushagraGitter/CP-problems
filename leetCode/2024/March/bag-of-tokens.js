/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
//https://leetcode.com/problems/bag-of-tokens/?envType=daily-question&envId=2024-03-04
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a- b);
        let lo = 0, hi = tokens.length - 1;
        let points = 0, ans = 0;
        while (lo <= hi && (power >= tokens[lo] || points > 0)) {
            while (lo <= hi && power >= tokens[lo]) {
                power -= tokens[lo++];
                points++;
            }

            ans = Math.max(ans, points);
            if (lo <= hi && points > 0) {
                power += tokens[hi--];
                points--;
            }
        }

        return ans;
};