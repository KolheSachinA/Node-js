const arr = [1, 2, 3, 9, 8, 7, true, 'anadi'];
// console.log(typeof arr);
// for(let i=0 ; i<arr.length;i++){
//     console.log(arr[i]);
// }
// console.log('FOROF--');
// for(let ele of arr){
//     console.log(ele);
// }

// console.log('forIn');

// for(let ele in arr){
//     console.log(ele);
// }

//array method:
//1.slice() : In this you can delete element by mentioning index no.It will not mutate original array.
// console.log(arr);//delete ele at index 3.
// console.log(arr.slice(2, 5));//[ 3, 9, 8 ]
// console.log(arr);

//2.splice() : It can add or remove element.
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);
// months.splice(4, 1, 'May', 'June');
// console.log(months);

// const joinMonth = months.join('-');
// console.log(joinMonth);
// console.log(typeof joinMonth);

//forEach()
// const arr1 = [550, 450, 230, 120, 1000, 950, 50, 20, 150];
// arr1.forEach((ele, index) => {
//     if (ele > 500) {
//         console.log(`${ele} at ${index} is abolve 500`);
//     } else {
//         console.log(`${ele} at ${index} is below 500`);
//     }
// })

//map()
//const arr2 = [1, 4, 2, 8, 9]
// const map1 = arr2.map((ele) => ele * 2);
// console.log(map1);

// //filter()
// const result = arr2.filter(ele => ele > 2);
// console.log(result);

// //reduce()
// const reducer = (prev, current) => prev + current;
// console.log(arr2.reduce(reducer));

//execise
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;
// const CurrencyToEuro = movements.map((ele) => ele * euroToUSD);
// console.log(CurrencyToEuro);

// const movementsDes = movements.map((ele, i) =>
//     `Movements ${i + 1} : You ${ele > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(ele)}`
// )
// console.log(movementsDes);

// const deposit = movements.filter((ele) => ele > 0);
// console.log(deposit);

// const withDraw = movements.filter((ele) => ele < 0);
// console.log(withDraw);

// const balance = movements.reduce((acc, current) => { return acc + current })
// console.log(balance);

// const Max = movements.reduce((acc,ele)=> {
//  if(acc > ele){
//     return acc;
//  }else {
//     return ele;
//  }
// })
// console.log(Max);

// //coding challenge
// const dog1 = [5,2,4,1,15,8,3];
// const dog2 = [16,6,10,5,6,1,4];
// let humanAge;
// const dogAge = dog1.map((ele)=>{
//     if(ele <= 2){
//         humanAge = 2 * ele
//         return humanAge;
//     }else {
//         humanAge = 16 + ele * 4;
//         return humanAge;
//     }
// }).filter((ele)=> {
//     return ele >= 18
// }).reduce((acc,ele,_,arr) =>{
//     return acc + ele / arr.length;
// },0)
// console.log(dogAge);
// console.log(movements);

// const totalDepositUSD = movements.filter((ele) => ele >0)
//                                 .map((ele) => ele * 1.1)
//                                 .reduce((acc,ele,i,arr)=>{
//                                 return acc + ele;
// });
// console.log(totalDepositUSD);

//creating arrays.

// const z = new Array(7);
// z.fill(1,2,6);
// console.log(z);

// //array.from()
// const x = Array.from({length:7},(_,i)=>i+1);
// console.log(x);

//Dates
// const now = new Date();
// console.log(now);
// console.log(new Date('2021-12-23T13:40:35.388Z'));
// console.log(new Date('May 1 , 1997'));

// const future = new Date(2025,5,1,07,15);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getMilliseconds);
// console.log(future.getDate());
// console.log(future.setFullYear(2021));
// console.log(Date.now());
// console.log(future.toDateString('2021-12-23T13:40:35.388Z'));
// console.log(future.toLocaleDateString());
// console.log(future.getTimezoneOffset());

//setTimeOut and SetInterval.
// const ingredients = ['Gift card','Voucher']
// const TimerDelivery = setTimeout((ing1,ing2) => {
//     console.log(`Your order is here with ${ing1} and ${ing2} 🎁🎁`);
// }, 3000,...ingredients);
// if(ingredients.includes('')) clearTimeout(TimerDelivery);

// setInterval(()=>{
//     const now = new Date();
//     console.log(now);
// },1000)

