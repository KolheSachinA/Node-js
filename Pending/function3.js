//4.
function power(r){
   let x = r*r;
   let y = r*r*r;
    console.log(`The square  of ${r} is ${x}`);
    console.log(`The cube  of ${r} is ${y}`);
}

power(2);

//5.
function number(n1){
   if( n1 % 2==0){
       console.log(`${n1} is even`);
   }
   else{
       console.log(`${n1} is odd`);
   }
}
number(9)
//6..swapping without third variable.
function swap(a,b,c){
    a=a+b;
    var b=a-b;
    var a=a-b;
    console.log(`The new value of a and b is ${a} and ${b}`);
}
swap(10,20);


