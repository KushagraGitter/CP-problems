//https://leetcode.com/problems/mirror-reflection/
/**
 * 858. Mirror Reflection
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
  while (p % 2 == 0 && q % 2 == 0) {
    p /= 2
    q /= 2
  }
  if (p % 2 == 1 && q % 2 == 0) return 0
  if (p % 2 == 1 && q % 2 == 1) return 1
  else return 2
}
