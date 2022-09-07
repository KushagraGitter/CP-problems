module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  dNums: function (arr, k) {
    // Creates an empty hashMap hM
    let hM = new Map()
    let result = []
    // Traverse the first window and store count
    // of every element in hash map
    for (let i = 0; i < k; i++) {
      if (hM.has(arr[i])) hM.set(arr[i], hM.get(arr[i]) + 1)
      else hM.set(arr[i], 1)
    }

    // Print count of first window
    result.push(hM.size)

    // Traverse through the remaining array
    for (let i = k; i < arr.length; i++) {
      // Remove first element of previous window
      // If there was only one occurrence
      if (hM.get(arr[i - k]) == 1) {
        hM.delete(arr[i - k])
      } // reduce count of the removed element
      else hM.set(arr[i - k], hM.get(arr[i - k]) - 1)

      // Add new element of current window
      // If this element appears first time,
      // set its count as 1,
      if (hM.has(arr[i])) hM.set(arr[i], hM.get(arr[i]) + 1)
      else hM.set(arr[i], 1)
      result.push(hM.size)
      // Print count of current window
      //document.write(hM.size + "<br/>");
    }
    return result
  },
}
