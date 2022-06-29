//https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
var minDeletions = function (s) {
  const n = s.length;
  const count = new Array(26).fill(0);

  for (const char of s) {
    const idx = char.charCodeAt(0) - 97;
    count[idx]++;
  }
  const set = new Set();

  let removed = 0;

  for (let i = 0; i < 26; i++) {
    let freq = count[i];

    if (freq == 0) continue;

    let curr = freq;

    while (curr > 0 && set.has(curr)) {
      curr--;
    }

    set.add(curr);
    removed += freq - curr;
  }

  return removed;
};
