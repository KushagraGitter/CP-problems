module.exports = { 
    //param A : array of strings
    //param B : array of strings
    //return a array of integers
       solve : function(A, B){
           let returnArray = []
   
           function trieNode(data) {
               this.data = data;
               this.childrens = new Array(26).fill(null);
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
   
               this.search = function search(word) {
                   let current = this.root;
                   for(let i = 0; i < word.length; i++) {
                       let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
                       if(current.childrens[index] !== null && current.childrens[index].data === word[i]) {
                           current = current.childrens[index];
                       } else {
                           return 0;
                       }
                   }
                   return current.isEnding ? 1 : 0;
               }
           }
   
           let newTrie = new trie();
           // for inserting the elements from the array
           for(let i = 0 ;i < A.length; i++) {
               newTrie.insert(A[i]);
           }
           // for search the elements from array 
           for(let j = 0; j < B.length; j++) {
               returnArray.push(newTrie.search(B[j]));
           }
   
           return returnArray;
   
   
       }
   };
   