async function getData() {
  let userData =  await getUserData();
    try {
         console.log(userData); 
    } catch(error) {
        console.log(error); 
    }
    
}

 function getUserData() {
    const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('foo');
          }, 300);
        });
   return myPromise;
}