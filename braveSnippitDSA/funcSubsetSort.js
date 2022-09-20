function funcSubsetSort(A) {
      let returnArray = [];
    let subSet = [];
    let arrayLength = A.length;
    function generate(subSet, index) {
        if(subSet.length === 2)
                returnArray.push([...subSet]);
        if(index > arrayLength/2) {
            return;
        }
        
        for(let i = index; i<A.length; i=i+2) {
            subSet.push(A[i]);
            generate(subSet, i + 1);
            subSet.pop();
        }
        
    }
    generate(subSet, 0);

    return returnArray
	}
	
