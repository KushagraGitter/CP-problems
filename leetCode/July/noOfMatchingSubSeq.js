//https://leetcode.com/problems/number-of-matching-subsequences/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let res = 0
  const alphaBuckets = Array(26)
    .fill(0)
    .map(() => []) // for a to z

  // init the alphaBuckets with index 0
  for (let word of words) {
    let index = word.charCodeAt(0) - 97
    alphaBuckets[index] = [...alphaBuckets[index], word]
  }

  for (let ch of s) {
    let index = ch.charCodeAt(0) - 97
    if (alphaBuckets[index].length) {
      let bucketWords = alphaBuckets[index]
      let updatedBucket = []
      for (let g = 0; g < bucketWords.length; g++) {
        let updatedWord = bucketWords[g].slice(1)
        if (!updatedWord) res++
        else {
          const wordIndex = updatedWord.charCodeAt(0) - 97
          if (wordIndex == index) updatedBucket.push(updatedWord)
          else {
            alphaBuckets[wordIndex] = [...alphaBuckets[wordIndex], updatedWord]
          }
        }
      }
      alphaBuckets[index] = updatedBucket
    }
  }

  return res
}
