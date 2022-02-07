module.exports = { 
    //param A : integer
    //return a strings
       convertToTitle : function(A){
                   
          let q = A;
       let r = 0
       let strArray= [];
       let str = ''
       while(q > 0) {
           
           r = q % 26;
   
           if(r === 0) {
               strArray.push('Z')
               q = Math.floor(q / 26) - 1;
           } else {
               strArray.push(String.fromCharCode((r - 1) + "A".charCodeAt(0)));
               q = Math.floor(q / 26);
           }
   
       }
       
       return strArray.reverse().join(""); 
       }
       
   };
   