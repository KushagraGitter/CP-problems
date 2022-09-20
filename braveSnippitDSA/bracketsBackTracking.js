let stringArray = []

function bracketsBackTracking(stringArray, open, end) {
    if(open === 0 && end === 0) {
        console.log(stringArray.join(''));
        return;
    }

    if(open > 0) {
        stringArray.push('(')
        bracketsBackTracking(stringArray, open - 1, end);
        stringArray.pop();
    }

    if (end > 0 && end > open) {
        stringArray.push(')');
        bracketsBackTracking(stringArray, open, end - 1);
        stringArray.pop();
    }

}