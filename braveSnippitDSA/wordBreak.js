var wordBreak = function(s, wordDict) {
    let dict = {};
    let sentences = [];
    let wordBreakHelper = (s, res) => {
        if (s == '') return sentences.push(res.join(' '));
        let curWord = '';
        s.forEach((letter, i) => {
            curWord += letter;
            if (wordDict.indexOf(curWord) != -1) {
                res.push(curWord);
                wordBreakHelper(s.slice(i+1, s.length), res);
                res.pop();
            }
        })
    };
    wordBreakHelper(s.split(''), []);
    return sentences;
}