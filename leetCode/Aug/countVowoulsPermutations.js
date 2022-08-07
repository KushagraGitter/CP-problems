//https://leetcode.com/problems/count-vowels-permutation/
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  const BIG1 = BigInt(1)
  const MOD = BigInt(10) ** BigInt(9) + BigInt(7) // 10^9 + 7

  let lastA = BIG1
  let lastE = BIG1
  let lastI = BIG1
  let lastO = BIG1
  let lastU = BIG1

  for (let i = 1; i < n; i++) {
    const a = lastE + lastI + lastU
    const e = lastA + lastI
    const i = lastE + lastO
    const o = lastI
    const u = lastI + lastO

    lastA = a % MOD
    lastE = e % MOD
    lastI = i % MOD
    lastO = o % MOD
    lastU = u % MOD
  }

  return (lastA + lastE + lastI + lastO + lastU) % MOD
}
