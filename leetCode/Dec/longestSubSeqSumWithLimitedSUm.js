var answerQueries = function (nums, queries) {
    nums = nums.sort((a, b) => (a - b));
    let output = [];

    for (let val of queries) {
        let sum = 0;
        let arr = [];

        for (let ele of nums) {
            sum += ele;
            if (sum <= val) {
                arr.push(ele);
            }
            else {break;}
        }

        let length = arr.length;
        output.push(length);
    }

    return output;
};