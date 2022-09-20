function is_palindrome(n){
        //code here
        let numArray  = [];
        let isPalin = true;
        while(n  > 0) {
            numArray.push(n%10);
            n = Math.floor(n / 10);
        }
        
        for(let i = 0; i < numArray.length/2; i++) {
            if(numArray[i] !== numArray[numArray.length - i - 1]){
                isPalin = false;
            }
        }
        
        return isPalin;
    }