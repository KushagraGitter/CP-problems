Promise.all = (promises) => {
    let responses = [];
    let erros = [];

    return new Promise((resolve, reject) => {
        promises.forEach(async (promise, i) => {
            try{
                let res = await promise
                responses.push(res)
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