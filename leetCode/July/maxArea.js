//https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let maxH = horizontalCuts[0];
  let maxW = verticalCuts[0];
  const mod = Math.pow(10, 9) + 7;

  for (let i = 1; i < horizontalCuts.length; i++) {
    maxH = Math.max(maxH, horizontalCuts[i] - horizontalCuts[i - 1]);
  }
  maxH = Math.max(maxH, h - horizontalCuts[horizontalCuts.length - 1]);

  for (let i = 1; i < verticalCuts.length; i++) {
    maxW = Math.max(maxW, verticalCuts[i] - verticalCuts[i - 1]);
  }
  maxW = Math.max(maxW, w - verticalCuts[verticalCuts.length - 1]);

  return (BigInt(maxH) * BigInt(maxW)) % BigInt(mod);
};
