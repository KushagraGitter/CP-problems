   let arr = [];
    function nonEmptySub(pos, sum, subSq, n, a, b) {
            if(pos === n) {
                 arr.push([...subSq]);
                 return;
            }  
           
            subSq.push(a[pos]); 
            sum = sum + subSq[subSq.length - 1];
            nonEmptySub(pos + 1, sum, subSq, n, a, b);
            sum = sum - subSq[subSq.length - 1];
            subSq.pop();
            nonEmptySub(pos + 1, sum, subSq, n, a, b);
           
            
        }
