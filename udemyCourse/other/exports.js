const add1 = require('./util.js');
console.log("From Exports");
const sum = add1.add(4,2);
const sub = add1.sub(10,3)
console.log(sub);
console.log(sum);

