// let array = [1, 2, 3, 4, 5];
// create filter method
// Array.prototype.myFilter = function (callback) {
//   let result = [];
//   let array = this;

//   array.forEach((el) => {
//     if (callback(el)) {
//       result.push(el);
//     }
//   });

//   return result;
// };

// let result = array
//   .myFilter((el) => {
//     return el % 2 === 0;
//   })
//   .map((el) => {
//     return el * 2;
//   });

// console.log(result);
// create bind method
// Function.prototype.myBind = function (context) {
//   let self = context;
//   let fn = this;
//   let result = function () {
//     return this.call(self);
//   };
//   return result;
// };

// let square = {
//   side: 5,
//   getArea: function () {
//     return this.side * this.side;
//   },
// };

// let square1 = {
//   side: 4,
// };

// //square.getArea.myBind(square1);

// console.log(square.getArea.myBind(square1)());
// create throttle method
function throttle(callback, delay) {
    let timeStarted = false;

    return function () {
        let arg = arguments;
        let ctx = this;
        if (!timeStarted) {
            callback.apply(ctx, arg);
            timeStarted = true;
            setTimeout(() => {
                timeStarted = false;
                }, delay);
        }
    };
}

function logName(name) {
    setTimeout(() => {
        console.log(name);
        }, 0);
}

let throttledLogName = throttle(logName, 1);

throttledLogName('a');
throttledLogName('ab');
throttledLogName('abc');

