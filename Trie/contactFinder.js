function contactFinder(A, B){
    let returnArray = [];
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
             let pfCount = 0;
             for(let i = 0; i < word.length; i++) {
                 let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
                 if(current.childrens[index] !== null && current.childrens[index].data === word[i]) {
                     current = current.childrens[index];
                 } else {
                     return 0;
                 }
             }
             return current.count;
         }
     }
     let newTrie = new trie();
     for(let i = 0; i < A.length; i++) {
         if(A[i] === 0) {
             newTrie.insert(B[i]);
         } else {
             returnArray.push(newTrie.search(B[i]));
         }
     }

     return returnArray;
}