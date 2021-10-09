//1.
function greeting(){
    console.log("Hello");
}
greeting();
//2.
function Addition(a,b){
        sum = a+b;
       // console.log(sum);
        return sum;
}
console.log(Addition(10,20));//30.
//3.
let r;
const pi=3.14;
function Circle(r){
    radius = pi*r*r;
    Circum = 2*pi*r;
    console.log("The radius of circle is:"+radius);
    console.log("The paramter is:"+Circum);
}
Circle(3);