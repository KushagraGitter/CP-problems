//https://leetcode.com/problems/prefix-and-suffix-search/submissions/
class WordFilter {
  constructor(words) {
    this.root = {};
    this.res = -1;
    for (let i = 0; i < words.length; i++) {
      let node = this.root;
      for (const c of words[i]) {
        if (!node[c]) {
          node[c] = {};
        }
        node = node[c];
      }
      node.word = words[i];
      node.index = i;
    }
  }
  _f(node, suffix) {
    if (node.word) {
      let start = node.word.length - suffix.length;
      if (start >= 0 && node.word.substring(start) === suffix) {
        this.res = Math.max(this.res, node.index);
      }
    }
    for (let i = 0; i < 26; i++) {
      const c = String.fromCharCode(97 + i);
      if (node[c]) {
        this._f(node[c], suffix);
      }
      if (node.word) {
        break;
      }
    }
  }
  f(prefix, suffix) {
    let node = this.root;
    for (const c of prefix) {
      if (!node[c]) {
        return -1;
      }
      node = node[c];
    }
    if (!node) {
      return -1;
    }
    this.res = -1;
    this._f(node, suffix);
    return this.res;
  }
}
