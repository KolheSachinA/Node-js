const add1 = require('./util2.js');
console.log("From Exports");
const sum = add1.addTwo(4,2);
const sub = add1.subTwo(10,3)
console.log(sub);
console.log(sum);

