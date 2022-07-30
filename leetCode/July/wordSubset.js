//https://leetcode.com/problems/word-subsets/
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = (module.exports = function (A, B) {
  let gf = Array(26).fill(0)
  for (b of B) {
    let f = Array(26).fill(0)
    for (c of b) {
      f[c.charCodeAt(0) - 97]++
    }
    for (let i = 0; i < 26; i++) {
      gf[i] = Math.max(gf[i], f[i])
    }
  }
  ret = []
  outer: for (a of A) {
    let f = Array(26).fill(0)
    for (c of a) {
      f[c.charCodeAt(0) - 97]++
    }
    for (let i = 0; i < 26; i++) {
      if (f[i] < gf[i]) continue outer
    }
    ret.push(a)
  }
  return ret
})
