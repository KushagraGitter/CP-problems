/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
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
               
               this.search = function search(current, prefix, word, serachResult) {
                   if(current === null || serachResult.length === 3) {
                       return
                   }
                   if(current.isEnding) {
                       serachResult.push(word)
                   }
                   //let current = this.root;
                   for(let i = 0; i < prefix.length; i++) {
                       let index = prefix[i].charCodeAt(0) - 'a'.charCodeAt(0);
                      
                       if(current.childrens[index] !== null && current.childrens[index].data === prefix[i]) {
                           current = current.childrens[index];
                            word = word + current.data;
                           //if(!current.isEnding) {
                              for(i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
                               this.search(current, String.fromCharCode(i), word, serachResult)
                           //} 
                           }
                           
                           
                       } else {
                           return 0;
                       }
                   }
                   return serachResult;
               }
           }
    let trieObj = new trie();
    
    for(let i = 0; i < products.length; i++) {
        trieObj.insert(products[i])
    }
    let prefix = '';
    for(const char of searchWord) {
       prefix = prefix + char;
       console.log(trieObj.search(trieObj.root, prefix, '', [])); 
    }
    
    
};