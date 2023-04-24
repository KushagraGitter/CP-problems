/**
 * @param {number[]} stones
 * @return {number}
 */
//https://leetcode.com/problems/last-stone-weight/description/
var lastStoneWeight = function(stones) {
    const mpq = new MaxPriorityQueue();

    stones.forEach((el) => {
        mpq.enqueue(el, el)
    })

   //console.log( mpq.dequeue());

   while(mpq.size() > 1) {
       const y = mpq.dequeue().element;
       const x = mpq.dequeue().element;

       if (x < y) {
           const newy = y - x;
           mpq.enqueue(newy, newy);
       }
       
   }
   console.log(mpq.size())
   if(mpq.size() >= 1) {
       return mpq.dequeue().element;
   }

   return 0;
};