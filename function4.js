//8. program to find the factorial of a number
let ps = require("prompt-sync");
let prompt = ps();
const number = prompt('Enter a positive integer: ');
if (number < 0) {
    console.error("Error");
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}