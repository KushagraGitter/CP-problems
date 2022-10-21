// function add1(a, b, c) {
//   return a + b + c + 1;
// }

// function add2(b) {
//   return b + 2;
// }

// function add3(c) {
//   return c + 3;
// }

// console.log(add3(add2(add1(1, 2, 3))));

// console.log(compose(add3, add2, add1)(1, 2, 3));
// //
// function compose(...fns) {
//   return function (...args) {
//     return fns.reduceRight((arg, fn) => {
//       if (Array.isArray(arg)) {
//         return fn(...arg);
//       } else {
//         return fn(arg);
//       }
//     }, args);
//   };
// }

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// Promise.resolve(3).then(res => {
//     console.log(res);
//     setTimeout(() => {
//       console.log(7);
//     }, 100);

//     setTimeout(() => {
//       console.log(8);
//     }, 0);
// });

// setTimeout(() => {
//   console.log(4);
// }, 100);

// setTimeout(() => {
//   console.log(9);
// }, 0);

// setTimeout(() => {
//   console.log(5);
// }, -100);

// console.log(6);

//1, 6, 3, 5, 2, 9, 8, 4, 7

// var arr = [100, 100, 100];
// console.log(arr.map(parseInt));
// //[]

// Array.prototyp.myMap = function (cb) {
//   let array = [];
//   this.forEach((el) => {
//     array.push(cb(el))
//   })

//   return array
// }

const sum = (a, b, c) => a + b + c;

const memoize = (cb) => {
    let cache = new Map();
    return function (...args) {
        let result;
        for (const [key, value] of cache) {
            let isCacheMatch = true;
            if (args.length === key.length) {
                for (let i = 0; i < args.length; i++) {
                    if (args[i] !== key[i]) {
                        isCacheMatch = false;
                    }
                }
                if (isCacheMatch) {
                    result = value;
                    break;
                }
            }
        }

        if (result) {
            console.log('cache');
            return result;
        } else {
            result = cb.apply(this, args);
            cache.set(args, result);
            console.log('executed');
        }
    };
    // Need to implement memoize
};

const memoizedSum = memoize(sum);
memoizedSum(1, 2, 3);
memoizedSum(1, 2, 3);

memoizedSum(1, 2, '3');
memoizedSum(1, 2, '3');

const obj1 = { a: 123 };

memoizedSum(obj1, 2, 3);
memoizedSum(obj1, 2, 3);

memoizedSum({ a: 123 }, 2, 3);
memoizedSum({ a: 123 }, 2, 3);

// Executed
// Cache

// Executed
// Cache

// Executed
// Cache

// Executed
// Executed

