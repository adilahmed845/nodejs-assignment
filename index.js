const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("This is My first Promise")
    },2000)
})

promise.then((result)=>{
    console.log(result);
})