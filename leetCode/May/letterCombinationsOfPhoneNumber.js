/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  const letterMap = {
      0 : '0',
      1 : '1',
      2 : 'abc',
      3 : 'def',
      4 : 'ghi',
      5 : 'jkl',
      6 : 'mno',
      7 : 'pqrs',
      8 : 'tuv',
      9 : 'wxyz', 
  }

  let returnArray = [];

  function combination(indx, currString) {
  if(indx === digit.length) {
      returnArray.push(currString);
      return;
  }
  
  let mapL = letterMap[digit[indx]];
  for(let i = 0; i < mapL.length; i++) {
      combination(indx + 1, currString + mapL[i] )
  }
  
  }
  let digit = digits;
  if(digit.length > 0) {
      combination(0, '');
  }
  

  return returnArray;
};