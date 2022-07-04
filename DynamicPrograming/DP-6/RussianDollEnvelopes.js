module.exports = { 
  //param A : array of array of integers
  //return an integer
   solve : function(env){
    if(env.length== 0) return 0;
     env.sort((a,b)=>{
         let [aw,ah] = a;
         let [bw,bh] = b;
         
         if(aw > bw){
             return 1;
         }else return -1;
     })
     
     let lis = new Array(env.length).fill(1);
     
     let max = 1;
     
     for(let i = 1; i < env.length; i++){
         
         for(let j = 0; j < i; j++){
             
             if(env[i][0] > env[j][0] && env[i][1] > env[j][1] && lis[i] <= lis[j] ){
                 
                 lis[i] = 1 + lis[j];
                 max  = Math.max(max,lis[i]);
             }
         }
     }
     
     return max;
 
   }
 };
 