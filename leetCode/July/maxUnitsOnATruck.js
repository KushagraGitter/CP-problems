//https://leetcode.com/problems/maximum-units-on-a-truck/
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let i = 0;
  let outPut = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    if (truckSize >= boxTypes[i][0]) {
      outPut = outPut + boxTypes[i][0] * boxTypes[i][1];
      truckSize = truckSize - boxTypes[i][0];
    } else {
      outPut = outPut + truckSize * boxTypes[i][1];
      return outPut;
    }
  }
  return outPut;
};
