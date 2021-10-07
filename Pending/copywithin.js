//Copy within.
let arr = [10,90,80,60,50,40,5,30];
console.log(arr.copyWithin(1,3,5));

//Entries.
const array1 = ['','Mike', 'Raj', 'Kumar','sachin'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);

//fill.
let arr1 = ['Mike', 'Raj', 'Kumar','sachin','Dhoni'];
console.log(arr1.fill('Sam',2,4));