// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)
//
// const names = ['Qendresa', 'test', 'testi1']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })
//
// const geocode = (address, callback) => {
//     const data = {
//         latitude: 0,
//         longitude: 0
//     }
//     return data
// }
//

const add = (num1, num2, callback) => {
    setTimeout(() => {
        console.log('Two seconds are up')
        const sum = num1 + num2
        callback(sum)
    }, 2000)
}
add(1, 4, (sum) => {
    console.log(sum)
})


