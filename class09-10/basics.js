//  //console.log(x);//throw error.
// console.log(y);//throw error.
// //console.log(z);//undefined
// //const x = 10;
// y = 10;
// let y
// //var z = 10;

//Rest parameter
const sum =(...arr) =>console.log(arr);
sum(1,2,3,4,5,6,7,8,9)
//spread for array
console.log(Math.max(1,2,3))
console.log(Math.max(...[1,2,4]));
//spread for Object.
var objOne = {};
Object.assign(objOne,{a:1,b:2,c:3},{x:4,y:5,z:6})
console.log(objOne);
const name = 'sachin'
console.log(name);

console.log(name);

function sub()  {
    return 'byde'
}
console.log(sub());
console.log(typeof(sub));
