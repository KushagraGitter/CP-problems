//https://leetcode.com/problems/find-and-replace-pattern/
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const m1 = new Map()
  for (let i = 0; i < pattern.length; i++) {
    m1.set(pattern[i], m1.get(pattern[i]) || [])
    m1.set(pattern[i], [...m1.get(pattern[i]), i])
  }
  const checkArray = [...m1.values()]
  const arrayOfPatters = []
  for (let word of words) {
    const m2 = new Map()
    for (let j = 0; j < word.length; j++) {
      m2.set(word[j], m2.get(word[j]) || [])
      m2.set(word[j], [...m2.get(word[j]), j])
    }
    arrayOfPatters.push([...m2.values()])
  }
  const result = []
  for (let i = 0; i < arrayOfPatters.length; i++) {
    if (checkArray.length !== arrayOfPatters[i].length) continue
    let flag = false
    for (let j = 0; j < arrayOfPatters[i].length; j++) {
      if (checkArray[j].length !== arrayOfPatters[i][j].length) {
        flag = true
        break
      }
      for (let index = 0; index < arrayOfPatters[i][j].length; index++) {
        if (checkArray[j][index] !== arrayOfPatters[i][j][index]) {
          flag = true
          break
        }
      }
    }
    if (flag) continue
    result.push(words[i])
  }
  return result
}
