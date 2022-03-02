module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let maxXor = -Infinity
   
           function trieNode(data) {
               this.value = data;
               this.childrens = new Array(2).fill(null);  
           }
   
           function bitsOfTrie() {
               this.root = new trieNode("");
               this.maxNumber = 0;
           }
   
           bitsOfTrie.prototype.insert = function insert(number) {
               let current = this.root;
               let binaryNumber = this.getBinary(number);
   
               for(let i = 0; i < binaryNumber.length; i++) {
                   let bit = parseInt(binaryNumber[i]);
                   if(current.childrens[bit] == null) {
                       current.childrens[bit] = new trieNode()
                   }
                   current = current.childrens[bit];
               }
               current.value = number;
               
           }
   
           bitsOfTrie.prototype.search = function search(number) {
               let current = this.root;
               let binaryNumber = this.getBinary(number);
   
               for(let i = 0; i < binaryNumber.length; i++) {
                   let bit = parseInt(binaryNumber[i]);
   
                   if(bit === 0 && current.childrens[1] !== null) {
                       current = current.childrens[1];
                   } else if(bit === 0 && current.childrens[1] == null) {
                       current = current.childrens[0];
                   } else if (bit === 1 && current.childrens[0] !== null) {
                       current = current.childrens[0];
                   } else if (bit === 1 && current.childrens[0] == null) {
                       current = current.childrens[1];
                   }
               }
               return current.value;
           }
   
           bitsOfTrie.prototype.getBinary = function getBinary(number) {
               let maxNumberLength = this.maxNumber.toString("2").length;
               let binNumber = number.toString("2");
               let binaryNumberLength = binNumber.length;
   
               for(let i = 0; i < maxNumberLength - binaryNumberLength; i++) {
                   binNumber = "0"+binNumber;
               }
   
               return binNumber;
           }
   
           let bitsOfTrieObj = new bitsOfTrie();
           
           bitsOfTrieObj.maxNumber = Math.max(...A);
           bitsOfTrieObj.insert(A[0]);
   
           for(let i = 1; i < A.length; i++) {
             let num =  bitsOfTrieObj.search(A[i]);
             maxXor = Math.max(maxXor, num^A[i]);
   
             bitsOfTrieObj.insert(A[i]);
           }
   
           return maxXor;
   
       }
   };
   