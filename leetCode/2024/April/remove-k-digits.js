/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
//https://leetcode.com/problems/remove-k-digits/?envType=daily-question&envId=2024-04-11
var removeKdigits = function(num, k) {
    if(num.length ==k) return '0'
    const res = []
   for(let i=0;i<num.length;i++){
        while(k>0 && res.length>0 && res[res.length-1]>num[i]){
            res.pop()
            k--
        }
        
        if(res.length ==0 && num[i]=='0') continue
        res.push(num[i])
   }

   while(k>0 && res.length>0) {
    k--;
    res.pop();
   }

   return res.length ==0 ?'0':res.join('')
};