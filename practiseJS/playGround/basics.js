// function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);

//     var x = 2;
//     let y = 12;
//   }

// func1();
//2.code

// function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> 
//       console.log(i),
//       2000);
//     }

//   }

// func2();

// (function(){
//     setTimeout(()=> console.log(1),2000);//4.--1
//     console.log(2);//1.--2
//     setTimeout(()=> console.log(3),0);//3.--3
//     console.log(4);//2.--4
// })
// ();

//3.code

// Code 1:

// let x= {}, y = {name:"Ronny"},z = {name:"John"};

// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};

// console.log(x[y]);

// function increment(){
//     console.log('starting of loop');
//     for(let i = 0;i < 10000;i++){
//         console.log(i);
//         console.log('aaa');
//     }
//     console.log('end of loop');
// }
// increment();
// console.log('outside of loop!');

//rest parameter.
// function sum(a,b,c,d,...arr){
//     let total = 0
//     console.log(arguments);
//     console.log(arr);
//     //console.log(arr);
//     // for(let ele of arr){
//     //     total = total + ele;
//     //     console.log(total);
//     // }
// }
// sum(1,2,3,4,5)

//spread paramter.
//1.
// function sum(arr){
//     let total = 0;
//     console.log(arr);
//     console.log(a+b+c+d);
// }

// const arr = [1,2,3,4,5]
// sum(...arr)

//2.concat array.

// arr1 = [1, 2, 3];
// arr2 = [4, 5];
// arr3 = [...arr1, ...arr2];
//console.log(arr3);

//3.copy array

//arr4 = arr3;
//console.log(arr4);
//arr4.push(6);
// arr4 = [...arr3,6];
// console.log(arr3);
// console.log(arr4);

//Optional chaining.
// const user = {
//     personalData : {
//         fname : 'sachin',
//         lname : 'D.',
//         age : 24,
//         bio : {
//             isAdult:function adult() {
//                 console.log(user.personalData.age);
//                 if(user.personalData.age >= 18){
//                     return 'Can drive'
//                 }else {
//                     return 'Cant drive'
//                 }

//             }
//         }
//     }
// }
// const well = user.personalData ?.bio?.isAdult?.() ?? 'Not Found!'
// console.log(well);

//Arrays

//const arr = [1,2,3,4,'a','b',true];
// for(let ele in arr){
//     console.log(ele);
// }

// for(let ele of arr){
//     console.log(ele);
// }
// arr.forEach((value,index)=>{
//     console.log(`INDEX : ${index}   Value : ${value}`);
// })
//----------------------------------------------------------------------
//simple server.

// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     const pathName = req.url;
//     if (pathName === '/' || pathName === '/overview') {
//         console.log('hello world!');
//         res.end('This is HOME PAGE!')
//     } else {
//         res.end('NOT FOUND')
//     }

// });
// server.listen(8080, 'localhost', () => {
//     console.log('server is running');
// })

// settimeout(() => {
//     console.log('Hello');
// }, 3000);


// setTimeout(() => {
//     console.log('hello');
// }, 3000);

// function print(callback) {
//     callback();
// }

// const getResult = (res) => {
//     console.log('message from server:' + res);
// }

// const loadRequest = (query, callback) => {
//     setTimeout(() => {
//         const res = query;
//         callback(res)
//     }, 3000);
// }

// loadRequest('Data is fetched!', getResult);

// const  myPromise = () =>
// {
//   return  new Promise((resolve, reject) => {
//     let condition = false;
//     if (condition) {
//         resolve('Promise is resolved!')
//     } else {
//         reject('Promise is rejected!')
//     }
// }).then((msg) => {
//     console.log(msg);
// }).catch((error) => {
//     console.log(error);
// })
// }
// myPromise();

// const resultServer = () =>{
//     console.log('result from server!');
// }

// const requestMade = (callback) =>{
// setTimeout(() => {
//   console.log('Data is fetched!');
//     callback();
// }, 3000);
// }

// requestMade(resultServer);

// async () =>{
//     return 'hello'
// }

// async function hello() { 
//     return "Hello" 
// };
// hello().then((value)=>{
//     console.log(value);
// })

// async function example() {

//     let promise = new Promise((resolve, reject) => {
//       let condition = true
//        if(condition == true){
//          resolve('promise is resolved!')
//        }else {
//          reject('Proimse is rejected!')
//        }

//     }).catch(()=>{
//         console.log('Failed');
//     }).then(()=>{
//       console.log('sucess!');
//     })

//     let result = await promise; // wait until the promise resolves (*)
//     //console.log(result); // "done!"
//   }

// example();

// async function greeting(){
//     return new promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('done')
//         }, 3000);
//     })
//     const 
// }

// console.log(NaN == NaN);
// console.log(typeof NaN);
// const arr = [1,2,3,1,2,3,1,2,3,4,5,3,2,1,4,9,9,99,9,9]
// console.log([...new Set(arr)]);
// console.log(new Set('SACHINNAS'));

//interview questions.
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

// function bark() {
//     console.log('Woof!');
// }

// bark.animal = 'dog';
// console.log(bark.animal);

//chainable effect of array methods.

// const arr = [10, 40, 25, 32, 78, 94];
// const newArr = arr.map((ele) => ele * 2).filter((ele) => ele >= 60).reduce((acc,current)=>{
//   return acc +=current;
// })
// console.log(newArr);
