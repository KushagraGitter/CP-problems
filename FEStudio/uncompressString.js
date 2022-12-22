
//https://bigfrontend.dev/problem/uncompress-string

/**
 * @param {string} str
 * @returns {string}
 */
function uncompress(str) {
    // your code here
    let stack = [];
    for(let i = 0; i < str.length; i++) {
      if(str[i] === ')') {
        let tempStr = ''
        while(stack[stack.length - 1] !== '(') {
          tempStr =  stack.pop() + tempStr 
        }
        stack.pop()
        let number  = ''
        while(!Number.isNaN(parseInt(stack[stack.length - 1])) && typeof parseInt(stack[stack.length - 1]) === 'number') {
            number = stack.pop() +  number
        }  
        number = parseInt(number)
        tempStr = tempStr.repeat(number);
        stack.push(tempStr)
  
      } else {
        stack.push(str[i])
      }
    }
  
    return stack.join('')
  }
  
  uncompress('3(ab)') // 'ababab'
uncompress('3(ab2(c))') // 'abccabccabcc'
  