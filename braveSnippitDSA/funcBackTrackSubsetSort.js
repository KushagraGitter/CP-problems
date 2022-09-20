

function funcSubsetSort(A){
    let returnArray = [];
    let subSet = [];
    let arrayLength = A.length;
    A = A.sort((a, b) => a - b);

    function generate(subSet, index) {
        returnArray.push([...subSet]);
        
        if(index === arrayLength) {
           return;
        }

        for(let i = index; i < A.length; i++) {
            subSet.push(A[i]);
            generate(subSet, i + 1);
            subSet.pop();
        }
    }
    generate(subSet, 0);
    return returnArray;
	}
