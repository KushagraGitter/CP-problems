'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
 
function main() {
    const x = readline();
    
    for(let i = 0; i < x; i++){
        let line2 = readline(); 
        doorKeys(line2);
    }
}

 function doorKeys(word) {
    let len = word.length;
    let kyes = [];
      
    for(let j = 0; j < len; j++) {
        let asciValue = word[j].charCodeAt(0);
        
        if(asciValue >= 97 && asciValue <= 122 ) {
            kyes.push(word[j]);
        } else {
           if(!kyes.includes(word[j].toLowerCase())) {
               console.log(false);
               return;
           }
        }
    }
    console.log(true);
 }