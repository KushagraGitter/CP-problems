function CommonElements(A, B) {
      let slope = 0;
      let maxEl = -Infinity;
      let diffX = 0;
      let diffY = 0;
      let slopeMap = new Map();
      let currentMax = 0;
      let maxPoints = 0;

      for(let i = 0; i < A.length; i++) {
            for(let j = i + 1; j < A.length; j++) {

                  diffX = A[j] - B[i]; 
                  diffY = B[j] - B[i];

//                   let gcd = gcd_two_numbers(diffX, diffY);

//                   diffX = diffX / gcd;
//                   diffY = diffY / gcd;

                  const slope = {
                        x : diffX,
                        y :diffY
                  }

                  if(slopeMap.has(slope)) {
                        slopeMap.set(slope, slopeMap.get(slope) + 1);  
                  } else {
                        slopeMap.set(slope, 1);
                  }

                  

                  currentMax = Math.max(currentMax, slopeMap.get(slope));
                    
            }
            maxPoints = Math.max(maxPoints, currentMax);
            slopeMap.clear();

      }

      return maxPoints;

//       function gcd_two_numbers(x, y) {
//               if ((typeof x !== 'number') || (typeof y !== 'number')) 
//                 return false;
//               x = Math.abs(x);
//               y = Math.abs(y);
//               while(y) {
//                 var t = y;
//                 y = x % y;
//                 x = t;
//               }
//               return x;
//             }
}