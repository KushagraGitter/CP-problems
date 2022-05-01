/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  //bf create modify the string by running the loop and check if any backspace charcter is found
  //if yes the replace the charcter before the backspace with the char after the backspace.

  //optimization using two pointer

  let i = s.length - 1;
  let j = t.length - 1;
  let skips = 0;
  let skipt = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        skips++;
        i--;
      } else if (skips > 0) {
        skips--;
        i--;
      } else {
        break;
      }
    }

    while (j >= 0) {
      if (t[j] === '#') {
        skipt++;
        j--;
      } else if (skipt > 0) {
        skipt--;
        j--;
      } else {
        break;
      }
    }

    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false;
    }
    if (i >= 0 != j >= 0) return false;

    i--;
    j--;
  }

  return true;
};

//"ab##", t = "c#d#"
//"ab#c", t = "ad#c"
