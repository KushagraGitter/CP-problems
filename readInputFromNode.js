'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {
  const x = readline();

  for (let i = 0; i < x; i++) {
    let line2 = readline();
    doorKeys(line2);
  }
}

function doorKeys(word) {
  let len = word.length;
  let kyes = [];

  for (let j = 0; j < len; j++) {
    let asciValue = word[j].charCodeAt(0);

    if (asciValue >= 97 && asciValue <= 122) {
      kyes.push(word[j]);
    } else {
      if (!kyes.includes(word[j].toLowerCase())) {
        console.log(false);
        return;
      }
    }
  }
  console.log(true);
}

/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here
