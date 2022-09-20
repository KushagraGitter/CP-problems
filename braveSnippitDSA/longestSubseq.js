	function longestConsecutive(A){
		let Asorted = A.sort((a, b) => a - b);
		let length = 1;
		let maxLength = 1;
		for(let i = 1; i < Asorted.length; i++) {
			if(Asorted[i] - Asorted[i - 1] === 1) {
				length++;
			} else {
			   // maxLength = Math.max(maxLength, length);
			    length = 1;
			}
				maxLength = Math.max(maxLength, length);

		}

		return maxLength;
	}