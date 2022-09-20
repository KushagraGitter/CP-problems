function convertToTitle(A){
                
    let q = A;
    let r = 0
    let strArray= [];
    let str = ''
    while(q > 0) {
        r = q % 26;
        q = parseInt(q / 26);
        strArray.push("Z".charCodeAt(0) - (25 -r))
        //console.log(str.reverse())
    }

    //reverse
     for(let i=0; i<strArray.length/2; i++) {
               const temp = strArray[i];
               strArray[i] = strArray[strArray.length - 1 -i]
               strArray[strArray.length - 1 -i] = temp;
            }
    
    for(let j = 0; j<strArray.length; j++) {
        str = str + String.fromCharCode(strArray[j] - 1);
    }
    return str 
	}