// Constructor : Initializes the LRUCache with capacity 
module.exports = {
    LRUCache: function(capacity){
    let LRUMap = new Map();
      let LLSize = 0 ;
      let head = null;
      let tail = null;

      function Node(data) {
          this.data = data;
          this.next = null;
          this.previous = null;
      } 

      function addNewNode(data) {
          head = new Node(data);
          tail = head;
      }
      

      function deleteAndAddNode(node) {
          if(node.previous !== null && node.next !== null) {
                 //dattact the node
                node.previous.next = node.next;
                node.next.previous = node.previous;
                //attach the node at the end
                tail.next = node;
                node.previous = tail;
                tail = tail.next;
          }
      }

      function deleteHeadNode() {
          let tempHead = head;
          if(head !== null && head.next !== null) {
              head =  head.next;
          }
         
          return tempHead;
      }

      function addNodeAtEnd(node) {
          if(head === tail && capacity === 1) {
              head = node;
              tail = head;
              return node;
          };
          if(head === null && tail === null ) {
              head = node;
              tail = head;
              return node;
          }
          tail.next = node;
          node.previous = tail;
          tail = tail.next;
          return node;
      }
      
      
      return {
        // get function returns an integer
        get: function(key){
            
            if(LRUMap.get(key) !== undefined) {
                let node = LRUMap.get(key);
                //console.log('//////get////',LRUMap )
                if(head !== tail) {
                    if(node === head) {
                        deleteHeadNode();
                        addNodeAtEnd(node);
                 } else {
                     if(node !== tail){
                        //console.log('//////get////',node )
                         deleteAndAddNode(node);
                     }
                     
                 }
                }
                return node.data;
            } else {
                return -1;
            }
        },
        // set returns nothing
	    set: function(key, value){
            // miss we do not find key in the map
            if(LRUMap.get(key) === undefined) {
                if(LLSize < capacity) {
                    LRUMap.set(key, addNodeAtEnd(new Node(value)));
                    LLSize++;
                } else {
                     
                    let delNodeRef = deleteHeadNode();
                    let delNodeKey;
                    for(const [key, value] of LRUMap.entries()){
                        if(value === delNodeRef){
                            delNodeKey = key
                        }
                    }
                     //console.log('//////before////',LRUMap )
                    LRUMap.delete(delNodeKey);
                    //console.log('//////after////',LRUMap )
                    LRUMap.set(key, addNodeAtEnd(new Node(value)));
                }
            } else {
                let node = LRUMap.get(key);
                node.data = value;
                if(head !== tail) {
                    if(node === head) {
                        deleteHeadNode();
                        addNodeAtEnd(node);
                 } else {
                     if(node !== tail){
                         //console.log('//////set////',node )
                         deleteAndAddNode(node);
                     }
                     
                 }
                }
            }
            
        }
      }
    }
}