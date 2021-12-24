const arr1 = ['sach','kolhe','cse',true,'sach','sach'];
console.log(arr1);
console.log(arr1.length);
//loops.
for(let element in arr1){
    console.log(element);
}
for(let element of arr1){
    console.log(element);
}
console.log("--------------");
arr1.forEach(function(element,index,array){
    console.log(` elements at ${index} ${array}`);
});
//using fat arrow function.
arr1.forEach((element,index,array)=>{
    console.log(`elements at ${index} : ${array}`);
});
//indexof
console.log(arr1.indexOf('sach',5));
//lastindexof.
console.log(arr1.lastIndexOf('sach'));
console.log(arr1.includes('sachin'));
//find().
//push().
const animal = ['pig','hen','sheep','goats'];
//let x=animal.push('chcken','rabbit');
//console.log(x);
// animal.unshift('chicken')
// console.log(animal);
//pop().
//console.log(animal.pop());
//shift().
//console.log(animal.shift());
//splice().
const month = ['January','marcha','April','June'];
//month.splice(month.length-1,0,'May')
month.splice(1,1,'March');
console.log(month);
// indexOfMonth = month.indexOf('marcha');
// if(indexOfMonth != -1){
//     const updateMonth=month.splice(indexOfMonth,1,'March')
//     console.log(month);
// }
// else{
//      console.log("Record not found!");
// }
//map()
// const arr2 = [1,2,3,4,8,9,11,15];
// let newArr = arr2.map((currentEle,index,arr2)=>{
//         return currentEle>=8;
// });
// console.log(arr2);
// console.log(newArr);
//
const arr2 = [2,3,4,6,8];
let newArr = arr2.map((initial,index,arr2)=>{
      
     return initial*2;
}).filter((initial) =>{
    return initial>10;
})
console.log(arr2);
console.log(newArr);




