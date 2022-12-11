const {
  PriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');

var minSetSize = function (arr) {
  let map = new Map();
  const totalLength = arr.length;
  let length = totalLength;
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
 debugger;
  // const maxPQ = new PriorityQueue((a, b) => {
  //   if (a.value > b.value) {
  //     return -1;
  //   } else {
  //     return 1;
  //   }
  // });

  // for (const [key, value] of map) {
  //   maxPQ.enqueue({ key: key, value: value });
  // }

  // while (length >= Math.floor(totalLength / 2)) {
  //   const count = maxPQ.dequeue();
  //   length = length - count.value;
  //   ans++;
  // }

  const maxPQ = new MaxPriorityQueue();

  for (const [key, value] of map) {
    maxPQ.enqueue(value);
  }

  while (length >= Math.floor(totalLength / 2)) {
    const count = maxPQ.dequeue();
    length = length - count;
    ans++;
  }
  console.log(ans);
  return ans;
};

minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]);
