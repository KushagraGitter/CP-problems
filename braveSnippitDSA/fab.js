function fab(N) {
    if(N === 0) {
        return 0;
    } 
    if(N === 1) {
        return 1;
    }
    //console.log(fab(N - 1) + fab(N - 2));
    return fab(N - 1) + fab(N - 2);
}