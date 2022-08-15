//https://leetcode.com/problems/roman-to-integer/
var romanToInt = function (s) {
  const dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  const reverseArr = s.split('').reverse()
  let level = 0
  let sum = 0
  reverseArr.forEach(item => {
    const newLevel = dic[item]
    if (newLevel >= level) {
      sum += newLevel
      level = newLevel
    } else {
      sum -= newLevel
    }
  })
  return sum
}
