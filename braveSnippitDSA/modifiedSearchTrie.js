

        function trieNode(data) {
            this.data = data;
            this.childrens = new Array(25).fill(null);
            this.isEnding = false;
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
                }
                current.isEnding = true;
            }
        }

        trie.prototype.modifiedSearch = function modifiedSearch(root, word, i, count) {
            
            if(word.length === i) {
                return count;
            }

            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);

            if(root.childrens[index] === null) {
                count++;
            }

            if(root.childrens[index] !== null && root.childrens[index].data === word[i]) {
                this.modifiedSearch(root.childrens[index], word, i + 1, count)
            }

            return count
        }

        trie.prototype.walk = function walk(root, word, index, count) {
                if(root !== null) {
                
                if(root.isEnding) {
                        if(word.length === index + 1 && count === 1) {
                                return 1;
                        } else {
                                return 0;
                        }
                } else {
                        if(word[index] !== root.data) {
                                count = count + 1;
                        }
                }        
                } 

                 

               for(let i = 0; i < root.childrens.length; i++) {
                if(root.childrens[i] !== null) {
                        this.walk(root.childrens[i], word, index + 1, i, count);
                }
                }
        }