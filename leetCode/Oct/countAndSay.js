//https://leetcode.com/problems/count-and-say/
let curr = "1";

for (let i = 1; i < n; ++i) {
    let temp = "";

    let cursor = 0;
    let lastChar = curr[0];
    let count = 0;

    while (cursor < curr.length) {
        if (lastChar !== curr[cursor]) {
            temp += count + lastChar;
            lastChar = curr[cursor];
            count = 0;
        }
        cursor += 1;
        count += 1;
    }

    temp += count + lastChar;
    curr = temp;
}

return curr;