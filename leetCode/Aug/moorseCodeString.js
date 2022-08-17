//https://leetcode.com/problems/unique-morse-code-words/
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let moorseCode = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ]

  let set = new Set()

  for (let i = 0; i < words.length; i++) {
    let moorseString = ''
    for (let j = 0; j < words[i].length; j++) {
      const idx = words[i][j].charCodeAt() - 'a'.charCodeAt()
      moorseString = moorseString + moorseCode[idx]
    }
    set.add(moorseString)
  }

  return set.size
}
