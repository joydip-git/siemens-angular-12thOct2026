// const divide = (a: number, b: number) => {
//     const p = new Promise(
//         //executor function
//         (resolveFn, rejectFn) => {
//             const res = a / b
//             if (res === Infinity) {
//                 const err = new Error('divisor should not be zero')
//                 //throw err
//                 rejectFn(err)
//             }
//             //return res
//             resolveFn(res)
//         }
//     )
//     return p
// }

const divide = async (a: number, b: number) => {
    const res = a / b
    if (res === Infinity) {
        const err = new Error('divisor should not be zero')
        throw err
    }
    return res
}

const add = (a: number, b: number) => a + b

// const p = divide(12, 3)
// p
//     .then(
//         (divRes) => { console.log(divRes); }
//     )
//     .catch(
//         (err) => { console.log(err); }
//     )
async function call() {
    try {
        const divRes = await divide(12, 3)
        console.log(divRes);
    } catch (err) {
        console.log(err);
    }
}
call()
console.log(add(12, 3))