function oddFibCount(A, B){
  let evCount = Math.floor(B/3) - Math.floor((A-1)/3);
            return (B-A+1) - evCount
	}