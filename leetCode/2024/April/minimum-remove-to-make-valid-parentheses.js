/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
//https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/?envType=daily-question&envId=2024-04-06
var minRemoveToMakeValid = function(s) {
    
    let sArray = Array.from(s);
    let openPar = 0;
    let closePare = 0;

    // move from left to right and check for the invalid closing parentheses
    // from left to right the number of open parentheses will be greater or equal to number to closing 
    // from right to left visa versa is true 

    for(let i = 0; i < sArray.length; i++) {
        
        if(sArray[i] === '(' ) {
            openPar++;
        } else if(sArray[i] === ')' ) {
            closePare++;
        } else {
            continue;
        }
        
        if(closePare > openPar) {
            sArray[i] = ''
            closePare--;
        }
    }

    openPar = 0;
    closePare = 0;

     for(let i = sArray.length - 1; i >= 0; i--) {
        
        if(sArray[i] === '(' ) {
            openPar++;
        } else if(sArray[i] === ')' ) {
            closePare++;
        } else {
            continue;
        }
        
        if(closePare < openPar) {
            sArray[i] = '';
            openPar--;
        }
    }
    
return sArray.join('');
};