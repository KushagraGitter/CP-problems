function combine(qArray, B) {
    let returnArray = [];
    let subSet = [];
    //let qArray  = [];
    //let vig = new Array(A.length).fill(false)
    
    qArray.sort((a, b) => a - b);
    
    let arrayLength = qArray.length;
    
    function generate(subSet, index, sum) {
      if (sum === B) {
          returnArray.push([...subSet]);
          return;
      } 
      if (index === arrayLength || sum > B) {
         return; 
      }
        let prev = -1;
        for(let i = index; i < qArray.length; i++) {
            if(i == 0 || qArray[i - 1] !== qArray[i]) {
                subSet.push(qArray[index]);
                generate(subSet, i + 1, sum + qArray[index]);
                subSet.pop();
             //   prev = 1;
            }
             
        }
      
       
      //  generate(subSet, index + 1, sum);
      }

    generate(subSet, 0, 0);

    return returnArray;
  }