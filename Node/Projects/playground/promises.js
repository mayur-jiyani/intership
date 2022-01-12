const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([5, 5, 5])
        reject("Promise rejected")
    }, 2000);
})

myPromise.then((result) => {
    console.log("success", result)
}).catch((error) => {
    console.log("error", error)
})