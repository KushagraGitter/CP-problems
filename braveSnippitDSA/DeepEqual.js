function DeepEqual(param1, param2) {

    //check if both are not object 
    if(typeof param1 !== 'object' && typeof param2 !== 'object') {
        // check for numbers
        if(typeof param1 === 'number' || typeof param2 === 'number') {
            return param1 === param2;
            //check for string 
        } else if(typeof param1 === 'string' || typeof param2 === 'string') {
            return param1 === param2;
        }
        return param1 === param2;
    }

    return false;
}