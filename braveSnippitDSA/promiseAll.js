function promiseAll(promises) {
  let output = [];
  return new Promise((resolve, reject) => {
   promises.forEach((promise, idx) => {
      promise.then((value) => {
        output[idx] = value;
         if (output.length === promises.length) {
            resolve(output);
        }
      })
     .catch(reject)
    });
   
  });
}

//Promise.resolve(2);

promiseAll([Promise.resolve(2), Promise.resolve(3)], Promise.reject()).then((value) => {
  console.log(value);
});
