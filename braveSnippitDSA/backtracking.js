// genrate all compinatin of 0,1




//[]
//[0]
//[1]
//[0, 0]
// [0, 1]
// [1, 1]

let tempArray = [];
let index = 0;
let N = 2;
// function genrateArray(ArrayRef, index) {

//     if(index === N) {

//         console.log(ArrayRef);
//         return;
//     }


//     tempArray.push(0);
//     genrateArray(tempArray, index + 1);
//     tempArray.pop();
    
//     tempArray.push(1);
//     genrateArray(tempArray, index + 1);
//     tempArray.pop();
// }
let qArray = [1,2,3];
let hasSet = new Set();
function genrateArray(ArrayRef, index) {
    //let index = 0;
    if(index === N) {

        console.log(qArray);
        return;
    }


    tempArray.push(qArray[index]);
    genrateArray(tempArray, index + 1);
    tempArray.pop();
    
//     tempArray.push(qArray[index]);
//     genrateArray(tempArray, index + 1);
//     tempArray.pop();
}