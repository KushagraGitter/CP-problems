// // // we ll which have one intersection point

// // 1 -> 2 -
// //              3 -> 6 -> 7
// // 4 -> 5 - 10

// // //head1 head2
// // //

// // function findIntersection(head1, head2) {
// //    let p1 = head1;
// //    let p2 = head2;

// //    let p1Lenght = 0;
// //    let p2Lenght = 0;
// //    let diff = 0;

// //    while(p1.next !== null) {
// //      p1Lenght++;
// //      p1= p1.next;
// //    }

// //    while(p2.next !== null) {
// //     p2Lenght++;
// //     p2= p2.next;
// //   }

// //   let greaterLenght = p1Lenght > p2Lenght ? "P1" : "p2"

// //   diff = Math.abs(p1Lenght - p2Lenght);

// //   p1 = head1;
// //   p2 = head2;

// //   if(greaterLenght === "p1") {
// //     while(diif > 0) {
// //       p1 = p1.next;
// //       diff--
// //     }
// //   } else {
// //     while(diif > 0) {
// //       p2 = p2.next;
// //       diff--
// //     }
// //   }

// //   while(p1.next !== null && p2.next !== null && p1.next !== p2.next) {
// //     p1 = p1.next;
// //     p2 = p2.next;
// //   }

// //   // let map = new Map();

// //   // while(p1 !== null) {
// //   //   map.set(p1, p1.value)
// //   //   p1 = p1.next;
// //   // }

// //   // while(p2.next !== null) {
// //   //   if(map.has(p2.next)) {
// //   //     return map.get(p2)
// //   //   }
// //   //   p2 = p2.next;
// //   // }

// //   return null
// // }
// // //TC O(n)
// // // SC O(n)

// let array = [0, 1, 0, 1, 0, 1, 1, 0];

// // BF
// // i {0 - n}
// //  j {i - n}
// // count one and zero
// // max avaiable

// //TC O(n3)

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 0) {
//     array[i] = -1;
//   }
// }

// let pf = new Array(array.length).fill(0);

// pf[0] = array[0];
// let map = new Map();
// let maxLenght = 0;

// for (let i = 1; i < array.length; i++) {
//   pf[i] = pf[i - 1] + array[i];
// }

// for (let i = 0; i < pf.length; i++) {
//   if (!map.has(pf[i])) {
//     map.set(pf[i], i);
//   } else {
//     maxLenght = Math.max(maxLenght, i - map.get(pf[i]));
//   }
// }

// return maxLenght;

// //TC

// [0, 0, 0, 1, 0, 1][(-1, -1, -1, 1, -1, 1)];
// pf[(-1, -2, -3, -2, -3, -2)];

// pf[(0, 1, 1, 2, 2)];

// let arr = ['name', 26];

// function test({ test1, test2, ...children }) {
//   console.log(children);
// }

// test({ test1: 'name', test2: 'age', test3: 'test3', test4: 'test4' });

function counter() {
    let value = 0;

    function incrementCounter() {
        value = value + 1;
        console.log(value);
    }

    function decrimentCounter() {
        value = value - 1;
        console.log(value);
    }

    return {
        incrementCounter: incrementCounter,
        decrimentCounter: decrimentCounter,
    };
}

// let counObj = new counter();
// counObj.incrementCounter();
// counObj.incrementCounter();
// counObj.incrementCounter();
// counObj.decrimentCounter();
