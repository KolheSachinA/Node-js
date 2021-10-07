//Arithmetic Operator.
let x=100;
let y=20;
let z=30;
let i=20;
sum=x+y;
sub=x-y;
mul=x*y;
div=x/y;
mod=x%y;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);
console.log('-------------------------------');

//Relational operator,Assignment operator.
console.log(x>y);
console.log(x==y);
console.log(y==i);
console.log(y>i);
console.log(i!=x);
console.log('-------------------------------');

//Divisability rule by Logical Operator.

let p=90;
let q=2;
let r=3;
let s=6;

if((p%2==0 && p%3==0) || p%s==0){
    console.log(`${p} is divisable by ${q},${r},${s}`);
}

//----------------------------

let x='sachin'
let y='SACHIN'

if(x===y){//=== operator.
    console.log("same");
}
else{
    console.log("NOT SAME");
}
//----------------------------------


