//5.arrow funtion with Rest operator.
const a1 = (a,b,...arr) =>{
    return `The first element is ${a} , second is ${b} and array is ${arr}`
}
console.log(a1('radha','shyam','koyal','Spider'));
console.log('----------');

//6.
const add=(...theArgs) => {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  console.log(add(1, 2, 3));
  console.log(add(1, 2, 3, 4));
  console.log("-------------------");

//7.copied
multiply=(multiplier, ...theArgs) =>{
    return theArgs.map(element => {
      return multiplier * element
    })
  }
  console.log( multiply(2, 15, 25, 42));
console.log("-----------------------");
//8.copied
const sample = (...arr) => {
    let  a2=arr.map(x=>x*2)
    return a2;
}
console.log(sample(1,2,3));