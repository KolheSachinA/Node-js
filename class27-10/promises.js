// const p = () => {
//     return new Promise((resolve, reject) => {
//         let a = 1 + 2;
//         if (a == 2) {
//             resolve('sucess')
//         } else {
//             reject('Failed')
//         }
//     })
// }
// p.then((msg) => {
//     console.log('This is in then block:' + msg)
// }).catch((error) => {
//     console.log('This is in catch Block:' + error)
// })
// console.log(typeof (p));

// //2.
// const logOn = new Promise((resolveFun, rejectFun) => {
//     resolveFun(404)
// })

// logOn.then((val) => console.log('asynchronous login has value:' + val))
// console.log('Login immediately');
// //3.
// // await can be used only inside async functions
// // await can be called only on promises

// const promiseFunc = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hello ! welcome');
//         }, 1000);
//     })
// }

// const funcOne = async () => {
//     const msg = await promiseFunc();
//     console.log(msg);
// }

// funcOne();

// // Program using only promises

// const promiseFunc2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hello ! welcome');
//         }, 1000);
//     })
// }

// promiseFunc2().then((response) => {
//     console.log(response);
// });
// //
// // await can be used only inside async functions
// // await can be called only on promises

// const promiseFunc = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const num = 10;
//             if (num % 2 === 0) {
//                 resolve("Its even")
//             } else {
//                 reject('Its not even');
//             }
//         }, 1000);
//     })
// }

// const funcOne = async () => {
//     try {
//         const msg = await promiseFunc();
//         console.log(msg);
//     } catch (err) {
//         console.log('Error is handled');
//     }
// }

// funcOne();

// // Program using only promises

// const promiseFunc2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve ('Hello ! welcome');
//         }, 1000);
//     })
// }

// promiseFunc2().then((response) => {
//     console.log(response);
// });
//5.
// await can be used only inside async functions
// await can be called only on promises

const promiseFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = 10;
            if (num % 2 === 0) {
                resolve("Its even")
            } else {
                reject('Its not even');
            }
        }, 1000);
    })
}

const funcOne = async () => {
    try {
        const msg = await promiseFunc();
        console.log(msg);
    } catch (err) {
        console.log('Error is handled');
    }
}

funcOne();

// // Program using only promises

// const promiseFunc2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve ('Hello ! welcome');
//         }, 1000);
//     })
// }

// promiseFunc2().then((response) => {
//     console.log(response);
// });
function sub(){
    return 'sub'
}
console.log(sub());