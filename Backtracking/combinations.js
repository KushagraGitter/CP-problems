module.exports = {
  //param A : integer
  //param B : integer
  //return a array of array of integers
  combine: function (A, B) {
    let returnArray = [];
    let subSet = [];
    let qArray = [];
    for (let i = 1; i <= A; i++) {
      qArray.push(i);
    }
    let arrayLength = qArray.length;

    function generate(subSet, index) {
      if (subSet.length === B) returnArray.push([...subSet]);
      if (index === arrayLength) {
        return;
      }

      for (let i = index; i < A; i++) {
        subSet.push(qArray[i]);
        generate(subSet, i + 1);
        subSet.pop();
      }
    }

    generate(subSet, 0);

    return returnArray;
  },
};
