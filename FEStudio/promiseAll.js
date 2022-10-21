Promise.all = (promises) => {
    let responses = [];
    let erros = [];

    return new Promise((resolve, reject) => {
        promises.forEach(async (promise, i) => {
            try{
                let res = await promise
                responses.push(res)
                debugger;
                if(i === promises.length - 1) {
                    if(erros.length > 0) {
                        reject(erros)
                    } else {
                        resolve("promises::" + responses)
                    }
                }
            }catch(err){
                erros.push(err)
                reject(err)
            }

        })
    })
}

// driver logic
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data")
        }, 100)
    })
}

let p1 = getData()
let p2 = getData()
let p3 = getData();

console.log(Promise.all([p1, p2, p3]))