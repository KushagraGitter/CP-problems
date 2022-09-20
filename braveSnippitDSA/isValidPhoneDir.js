 function isValidPhoneDir(A){
			let isValid = true;

			function trieNode(data) {
               this.data = data;
               this.childrens = new Array(10).fill(null);
               this.isEnding = false;
			   this.count = 0;
            }
   
           function trie() {
               this.root = new trieNode("");
   
               this.insert = function insert(word) {
                   let current = this.root;
   
                   for(let i = 0; i < word.length; i++) {
                       let index = parseInt(word[i]);
                       if(current.childrens[index] === null) {
                           let newNode = new trieNode(word[i]);
                           current.childrens[index] = newNode;
						    current = current.childrens[index];
					   		current.count = 1;
                       } else {
						   return false
					   }
                      
                   }
                   current.isEnding = true;
				   return true;
               }
           }

		   let trieObj = new trie();
		   for(let i = 0; i < A.length; i++) {
			   if(!trieObj.insert(A[i])){
				   return 0
			   }
		   }
		   return 1
	}