function trieNode(data) {
    this.data = data;
    this.childrens = new Array(26).fill(null);
    this.isEnding = false;
    this.count = 0;
}

function trie() {

    this.root = new trieNode("");

     this.insert = function insert(word) {
        let current = this.root;

        for(let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(current.childrens[index] === null) {
                let newNode = new trieNode(word[i]);
                current.childrens[index] = newNode;
            }
             current = current.childrens[index];
             current.count++;
        }
        current.isEnding = true;
    }

    this.search = function search(word) {
        let current = this.root;
        let matchCount = 0;
        for(let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(current.childrens[index] !== null && current.childrens[index].data === word[i]) {
                current = current.childrens[index];
                matchCount++;
            }
//             } else {
//                 return false;
//             }
        }
        return matchCount;
    }

    this.prefix = function prefix(word) {
        let current = this.root;
        let prefix = '';

        for(let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(current.childrens[index] !== null && current.childrens[index].data === word[i] && current.childrens[index].count === 1) {
                prefix = prefix + word[i];
                break;
            } else {
                prefix = prefix + word[i];
                current = current.childrens[index];
            }
        }

        return prefix;
    }
}