function minAndMaxOfAllSubArray(A) {
  let leftSmallerEls = [];
  let rightSmallerEls = [];
  let leftGreaterEls = [];
  let rightGreaterEls = [];

  let stack = [];
  let ansArray = [];
  debugger;
  for (let i = 0; i < A.length; i++) {
    while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      ansArray.push(-1);
      stack.push(i);
    } else {
      ansArray.push(stack[stack.length - 1]);
      stack.push(i);
    }
  }

  leftSmallerEls = ansArray;

  stack = [];
  ansArray = [];

  for (let i = A.length - 1; i >= 0; i--) {
    while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      ansArray.push(A.length);
      stack.push(i);
    } else {
      ansArray.push(stack[stack.length - 1]);
      stack.push(i);
    }
  }

  rightSmallerEls = ansArray.reverse();

  stack = [];
  ansArray = [];

  for (let i = 0; i < A.length; i++) {
    while (stack.length > 0 && A[stack[stack.length - 1]] <= A[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      ansArray.push(-1);
      stack.push(i);
    } else {
      ansArray.push(stack[stack.length - 1]);
      stack.push(i);
    }
  }

  leftGreaterEls = ansArray;
  stack = [];
  ansArray = [];

  for (let i = A.length - 1; i >= 0; i--) {
    while (stack.length > 0 && A[stack[stack.length - 1]] <= A[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      ansArray.push(A.length);
      stack.push(i);
    } else {
      ansArray.push(stack[stack.length - 1]);
      stack.push(i);
    }
  }

  rightGreaterEls = ansArray.reverse();

  let ans = 0;

  for (let j = 0; j < A.length; j++) {
    ans = ans + (j - leftGreaterEls[j]) * (rightGreaterEls[j] - j);
  }

  for (let k = 0; k < A.length; k++) {
    ans = ans - (k - leftSmallerEls[k]) * (rightSmallerEls[k] - k);
  }

  return ans;
}

// driver code

console.log(minAndMaxOfAllSubArray([1]));
