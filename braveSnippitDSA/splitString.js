let S = 'Hello World'
let tempArry = [];
let spString = S.split(' ')
let isNextWord = true;
for(let i = 0; i < spString.length; i++) {
    isNextWord = !isNextWord;
    for(let j = 0; j < spString[i].length; j++) {
        if(isNextWord) {
            tempArry.push(' ');
        }
        isNextWord = false;
        if(j === 0) {
            tempArry.push(spString[i][j].toUpperCase())
        } else if (spString[i][j].charCodeAt(0) >= 65 &&  spString[i][j].charCodeAt(0) <= 90) {
            tempArry.push(spString[i][j].toLowerCase())
        } else {
            tempArry.push(spString[i][j])
        }
        
    }
}