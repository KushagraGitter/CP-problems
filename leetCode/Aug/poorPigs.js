// Solution Explanation
// Let's simulate with a few examples.

// Example 1
// Let's say we have 3 rounds to test and need to test 4 buckets. To find out the poisonous bucket we need 1 pig.

// Simulation

// Round 1: Pig 1 drink 1st bucket.
// 		If it dies then, Bucket 1 is the poisonous bucket.
// Round 2: If Pig 1 survive Round 1 lets test 2nd Bucket
// 		If it dies then, Bucket 2 is the poisonous bucket.
// Round 3: If Pig 1 survive Round 2 lets test 3rd Bucket
// 		If it dies then, Bucket 3 is the poisonous bucket.

// If the pig survive round 3 then `Bucket 4` is the poisonous
// We do not need to test anymore. Eighter the pig die or live we can say after Round 3 which bucket is poisonous.

// Conclusion
// We can test n + 1 buckets with 1 pig. where n is the number of rounds we can test.

// Example 2
// Let's say we have 2 rounds to test and need to test 9 buckets. To find out the poisonous bucket we need a minimum of 2 pigs.

// Let’s rearrange the buckets in Row x Col fashion.

//   | 0 | 1 | 2 | ---> Col
// --+---+---+---+
// 0 | 1 | 2 | 3 |
// --+---+---+---+
// 1 | 4 | 5 | 6 |
// --+---+---+---+
// 2 | 7 | 8 | 9 |
// --+---+---+---+
// Here Row and Col indicates Round and Pigs (0 indexed).

// Simulation

// Round 1: Pig 1 drink Bucket 1, 2, 3. And Pig 2 drink Bucket 1 4 7
// 		If both Pigs died then It’s Bucket 1 (common bucket). If Pig 1 die and Pig 2 survive
// 		Then it’s Bucket 2 or 3 (if it’s 1 then Pig 2 also died).
// Round 2: Now Pig 2 drink Bucket 2.
// 		If it dies then Bucket 2 poisonous or if survive Bucket 3 is poisonous.
// Same Goes for Pig 1. If Pig 2 die in Round 1 and Pig 1 Survive. Then it’s Bucket 4 or 7 (if it’s 1 then Pig 1 also died).

// Round 2: Now Pig 1 drink Bucket 4.
// 		If it dies then Bucket 4 poisonous or if survive Bucket 7 is poisonous.
// So far we describe If Both or one of the pig died in Round 1.
// Let's Now simulate if Both pigs survive Round 1.

// If both pigs survive `Round 1` then It's definitely not 1 2 3 4 7 Bucket. So answer lies within Bucket 5 6 8 9

// Round 2: Pig 1 drink Bucket 5 6. And Pig 2 drink Bucket 5 8
// 		If both Pigs died then It’s Bucket 5 (common bucket). If Pig 1 die and Pig 2 survive
// 		Then it’s Bucket 6 (if it’s 5 then Pig 2 also died).

// Same goes for Pig 1. If Pig 2 die in Round 2 and Pig 1 Survive. Then it’s Bucket 8 (if it’s 5 then Pig 1 also died).

// If both survive Round 2 then, Bucket 9 is poisonous.
// Conclusion
// We can test (n + 1) ^ 2 buckets with 2 pig. where n is the number of rounds we can test.

// By simulating these 2 examples we can say if there is n round then we can test (n + 1) ^ p buckets

// We know the number of buckets and rounds so we can easily solve the above equation to find the minimum number of pigs.

// Big question WHY n + 1?
// To be honest I can't mathematically prove why we need n + 1. But I can say if there are 2 buckets and 1 round available we just had to drink 1 bucket and then we can easily decide which bucket is poisonous after observing the pig survive Round 1 or not.

// ***If anyone has a mathematical explanation please me know. I love to learn that.

// Big Thanks To
// https://leetcode.com/sanzee/
// https://leetcode.com/problems/poor-pigs/discuss/935581/C%2B%2BPythonPicture-Straightforward-solution-with-N-dimension-puzzle-cube-scan
// https://www.cnblogs.com/grandyang/p/7664088.html
// Amortized Analysis
// Time Complexity: O(1)
// Space Complexity: O(1)

// Runtime: 76 ms
// Memory Usage: 38.2 MB

// Code
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  let answer = 1
  let n = (minutesToTest / minutesToDie) >> 0
  n += 1

  // calculation with loop
  // while(n ** answer <= buckets) {
  //   answer++;
  // }

  return Math.ceil(Math.log(buckets) / Math.log(n))
}
