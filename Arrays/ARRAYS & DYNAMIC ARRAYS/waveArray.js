function waveArray(A) {

  const sortedA = A.sort((a, b) => a - b);
  let leftLargeCheck = true;

  for(let i=0; i<A.length; i++) {
  
      if(leftLargeCheck) {
         if(A[i] < A[i+1]) {
             let temp;
             temp = A[i+1];
             A[i+1] = A[i];
             A[i] = temp;
         }
         leftLargeCheck = false;

      } else {
         if(A[i] > A[i+1]) {
             let temp;
             temp = A[i+1];
             A[i+1] = A[i];
             A[i] = temp;
         }
         leftLargeCheck = true; 
      }

  }
  return A;
}