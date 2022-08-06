// write your code here...
// Given an array of non negative integers A and another non negative integer k, find if there exist 2 indices i and j such that i != j and A[i]-A[j] = k.
// Sample Input: [3 1 5 8], k = 7
// Sample Output: YES
// Explanation: 8 - 1 = 7.
//BF O(n^2)  SC: O(1)

// Sort -> 2 pointer
// A[p1] - A[p2] ; P2 front, P1 back
// TC : O(nlogn), SC: O(1)

// A[i] - A[j] = k
// A[i] = k + A[j];
// map key value
// TC : O(n), SC O(n)
// I Can hear you, can you hear me ?

function findDiffrenceEqual(A, K) {
  let map = new Map()
  const n = A.length

  for (let i = 0; i < n; i++) {
    map.set(A[i], i)
  }

  for (let j = 0; j < n; j++) {
    const mapValue = map.get(K + A[j])
    if (mapValue && mapValue !== j) {
      return 'YES'
    }
  }

  return 'NO'
}

// A[p2] - A[p1] = k
//[1, 2, 3 ,4 , 5] = 3
function findDiffrenceEqual2Pointer(A, K) {
  const n = A.length
  let p1 = 0
  let p2 = 1

  while (p2 < n && p1 < n) {
    if (A[p2] - A[p1] > K) {
      p1++
      p2++
    } else if (A[p2] - A[p1] < K) {
      p2++
    } else {
      return 'YES'
    }
  }

  return 'NO'
}
// TC O(n) SC: O(1)
