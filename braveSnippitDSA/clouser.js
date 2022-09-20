function outer() {
    let test = 0;
    let counter = 0;
    function increaseCounter() {
       return counter++;
    }
    setTimeout(increaseCounter, 1000)

}