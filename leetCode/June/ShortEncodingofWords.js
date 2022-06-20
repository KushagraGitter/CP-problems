//https://leetcode.com/problems/short-encoding-of-words/
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
/**
 * @param {string[]} words
 * @return {number}
 */
 var minimumLengthEncoding = function(words) {
  let totalCount = 0;
   let trieMap = new Map()
   
   function Node(data){
       this.data = data;
       this.children = new Array(26).fill(null);
       this.isEnding = false;
       this.count = 0;
   }
   
   function trie() {
       this.root = new Node("");
       
       this.insert = function insert(word, k) {
           let current = this.root;
           
           for(let i = word.length - 1; i >= 0; i--) {
               let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
               if(current.children[index] === null) {
                   let newNode = new Node(word[i]);
                   current.children[index] = newNode;
                  
                   current.count++;
               }
               current = current.children[index];
               
               //current.count++;
             
           }
           current.isEnding = true;
           //if(current.count === 1) {
               trieMap.set(current, k)
           //}
           
       }
   }
   let trieObj = new trie();
   for(let i = 0; i < words.length; i++) {
       //for(let i = word.length - 1; i >= 0; i--) {
           trieObj.insert(words[i], i);
       //}
   }
   let ans = 0;
   for(let [node, index] of trieMap) {
       if(node.count === 0)
           ans = ans + words[index].length + 1;
   }

   return ans;
};
};
