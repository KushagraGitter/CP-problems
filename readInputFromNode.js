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
  const [n, m] = firstLine.split(' ');
  let weightArray = [];

  for (let i = 0; i < parseInt(m); i++) {
    weightArray.push(readline());
  }
}

function findMaxStability(n, m, weightArray) {
  let min = 1;
  let max = m;

  const maxStability =
    Math.abs(min - max) * weightArray[0].weightArray[weightArray.length - 1];
  min = 1;
  max = maxStability;
  let mid = 0;
  while (max - min > 0) {
    mid = Math.floor((min + max) / 2);
    if (checkIfArangmentPossible(mid)) {
      min = mid;
    } else {
      max = mid;
    }
  }

  console.log(mid);

  function checkIfArangmentPossible(distance) {
    let orbit = 1;
    let planet = 1;
    while (orbit < n && planet < m) {
      orbit = orbit + distance;
      planet++;
    }
    return orbit < n ? true : false;
  }
    return ""
}
