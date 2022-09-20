   function triePrefix(A) {

       let returnArray = [];

    function trieNode(data) {
      this.data = data;
      this.childrens = new Array(26).fill(null);
      this.isEnding = false;
      this.wordStartingFrom = 0;
    }

    function trie() {
      this.root = new trieNode('');

      this.insert = function insert(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
          let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
          if (current.childrens[index] === null) {
            let newNode = new trieNode(word[i]);
            current.childrens[index] = newNode;
          }
          current.childrens[index].wordStartingFrom++;
          current = current.childrens[index];
        }
        current.isEnding = true;
      };

      this.search = function search(word) {
        let current = this.root;
        let count = 0;  
        for (let i = 0; i < word.length; i++) {
          let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
          if (
            current.childrens[index] !== null &&
            current.childrens[index].data === word[i]
          ) {
            count = count + current.childrens[index].wordStartingFrom   
            current = current.childrens[index];
             
          } else {
            return 0;
          }
        }
        return count;
      };
    }

    let newTrie = new trie();
    // for inserting the elements from the array
    for (let i = 0; i < A.length; i++) {
      newTrie.insert(A[i]);
    }

    for(let i = 0; i < A.length; i++) {
        returnArray.push(newTrie.search(A[i]))
    }

    return returnArray;   
       
} 