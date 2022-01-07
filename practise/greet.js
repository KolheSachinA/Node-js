var sum = require('./add')
const greet = (name) => {
    console.log(`Hello There, ${name}`);
}
greet('Mike');
console.log(sum(5, 3));
