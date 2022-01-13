const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject("number must be positive")
            }
            resolve(a + b)
        }, 2000);
    })
}


const doWork = async () => {
    const sum = await add(-1, 2)
    const sum1 = await add(1, sum)
    const sum2 = await add(1, sum1)
    const sum3 = await add(1, sum2)
    return sum3

}

doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})