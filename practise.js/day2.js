const arr = [1,2,3,'aaa','bbb','zzzz']
console.log(arr.length);
console.log(arr[arr.length-1]);
arr[7]='seema';
arr[6]='sachin'
console.log(arr);
console.log("--------------------");
console.log("Arrays using ForLoop");
for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}
console.log("---------------");
console.log("Arrays using ForIn()");
for(let elm in arr){
    console.log(arr[elm]);
}
console.log("-------------------");
console.log("arrays using forOf()");
for(let elm of arr){
    console.log(elm);
}
console.log("--------------------------");
//console.log("Arrays using ForEach()");
//arr.forEach(function(elm,index,arrays) {
       // console.log(`element at ${index} ${arrays}`);
//});
console.log(arr);

arr1 = [8,9];
arr2 = [10,11];
let a=arr.concat(arr1,arr2);
console.log(a);



