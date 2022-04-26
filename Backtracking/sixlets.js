module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let returnArray = [];
    let subSet = [];
    let arrayLength = A.length;
    function generate(subSet, index) {
      if (index === arrayLength) {
        if (subSet.length === B && arraySum(subSet) <= 1000)
          returnArray.push([...subSet]);
        //index = 0;
        return;
      }

      generate(subSet, index + 1);

      subSet.push(A[index]);
      generate(subSet, index + 1);
      subSet.pop();
    }
    generate(subSet, 0);

    function arraySum(subArray) {
      let sum = 0;
      for (let i = 0; i < subArray.length; i++) {
        sum = sum + subArray[i];
      }
      return sum;
    }

    return returnArray.length;
  },
};
