// setTimeout(() => {
//     console.log('2 seconds')
// }, 2000);


// const geocode = (add, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             logtitude: 12
//         }
//         // return data
//         callback(data)
//     }, 1000);

// };


// // console.log(geocode('surat'))
// geocode('surat', (data) => {
//     console.log(data)
// })



// const add = (num1, num2, callback) => {
//     setTimeout(() => {
//         sum = num1 + num2
//         callback(sum)

//     }, 2000);
// }



// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })



const myCallack = (callback) => {
    setTimeout(() => {
        // callback(undefined, [1, 2, 3])
        callback("error occured", undefined)
    }, 2000);
}

myCallack((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})