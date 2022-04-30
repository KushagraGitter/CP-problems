// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

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
  const firstLine = readline();
  fibDP(parseInt(firstLine));  
}
 
function fibDP (A) {
    let dp = new Array(A + 1).fill(-1);
    dp[0] = 0;
    dp[1] = 1;
    function fib(n) {
        if(n <= 1) {
            return dp[n];
        }
        if(dp[n] === -1) {
            dp[n] = fib(n - 1) + fib(n - 2);
        }
        return dp[n];
    }
    fib(A);
    console.log(dp[A]);
}
