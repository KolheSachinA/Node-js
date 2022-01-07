// //Arithmetic Operators.
// let x = 10
// let y = 20
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(y%x);
// //Relational Operators.
// console.log(x>y);
// console.log(x<y);
// console.log(x==y);
// console.log(x===y);
// console.log(x=!y);
// console.log(x==!y);
// console.log(++y);
// console.log(--y);
// //Logical Operators.
// console.log(10>5 && 5<10);
// console.log(10<5 && 5<10);
// console.log(10>5 || 5<10);
// console.log(10<5 || 5>10);
// //Bitwise Operator.
// console.log(14 & 9);//convert it into 32 bit and check every bit
// console.log(14 | 9);

// let myFirstPromise = () => {
//     return new Promise((resolve, reject) => {
//         let condition;
//         setTimeout(function () {
//             if (condition) {
//                 resolve('Sucess!')
//             }
//             else {
//                 reject('failed!')
//             }
//         }, 250)
//     })
// }
// myFirstPromise().then((successMessage) => {
//     console.log("Yay! " + successMessage)
// }).catch((rejectMsg) => {
//     console.log('Oops!' + rejectMsg);
// })

// const myPromise = () => {
//     return new Promise((resolve, reject) => {
//         let condition = 0;
//         if (condition) {
//             resolve('Sucess!')
//         } else {
//             reject('Failed!')
//         }
//     })
// }

// myPromise().then((msg) => {
//     console.log('Operation is ' + msg);
// }).catch((e) => {
//     console.log('Operation is ' + e);
// }).finally(() => {
//     console.log('Operation is done!');
// })



// function hello() { 
//     console.log('ds');

// };
// hello();
// console.log('fd');

// let hello = async function () { console.log("Hello"); };
// hello();
// let hello = async () => "Hello";
// hello().then((msg)=>console.log(msg))


// async function hello0() {
//     return await Promise.resolve("Hello");
//   };

//   hello0().then(msg => console.log(msg));

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise is fulfilled!')
//     }, 4000)
// })

// fun = async () => {
//     try {
//         let result = await promise;
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     } finally {
//         console.log('Operation is finished!');
//     }

// }

// fun();

[first,second] = [2,4]
console.log(first);
console.log(second);
[second , first] = [first , second]
console.log(first);
console.log(second);