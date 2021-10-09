//1.fat arrow function.
const sum = () => {
    let a = 10;
    let b = 20;
    let sum = a + b;
    return sum
}
console.log(sum());
const sum1 = () => `sum of numbers is ${5+6}`
console.log(sum1());
console.log("---------------------");

//2.Parameterised arrow function.
const area = (l,b) =>{
    let rectange = 2*(l+b)
    let square = (l*b);
    return `area of rectange and square is ${rectange} and ${square}`;
}
console.log(area(10,20));

//3.Single line arrow function.
const hello = (val) => `Hello ${val}`
console.log(hello('sachin'));

//4.Single line arrow function.
const a = (a) =>`${a+100}`;
console.log(a(10));



  