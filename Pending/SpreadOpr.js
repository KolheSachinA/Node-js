function num(a,b,c,){
    console.log(a+b+c);

}
var arg = [10,20,40];
//num.apply(null,arg);//ES5 apporch.
num(...arg)//ES6 approch.
console.log("-----------");
//2.Concat.
let arr1 = [1,2,3];
let arr2 = [4,5,6,7];
arr1 = arr1.concat(arr2)
console.log(arr1);
arr1 = [...arr1,...arr2,8];
console.log(arr1);
console.log("-----------");
//3.Copy
let arr3 = [1,2,3];
//let arr4 = arr3;
//console.log(arr4);
arr4 = [...arr3,4,5];
console.log(arr4);
console.log(arr3);

