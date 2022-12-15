class MyPromise {
    constructor(handler) {
        this.status = 'pending';
        this.value = null
        this.onFulFilledCallback = [];
        this.onRejectedCallback = [];

        const resolve = value => {
            if(this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = value
                this.onFulFilledCallback.map((fn) => fn(value))
            }
        }
        //test

        const reject = value => {
            if(this.status === 'pending') {
                this.status = 'rejected'
                this.value = value
                this.onRejectedCallback.map((fn) => fn(value))
            }
        }

        try {
            handler(resolve, reject)
        } catch(err) {
            reject(err)
        }
    }

    then(onFullfilled, onRejected) {
        if(this.status === 'pending') {
            this.onFulFilledCallback.push(onFullfilled);
            this.onRejectedCallback.push(onRejected)
        }

        if(this.status === 'fulfilled') {
            onFullfilled(this.value)
        } else if (this.status === 'rejected') {
            onRejected(this.value)
        }
    }
}

let p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved')
    }, 100)

})

p1.then((data) => {
    console.log(data)
})