let ps = require("prompt-sync");
let prompt = ps();

function greeting(name){
    console.log(`Hello ${name}`);
}
function user(){
    let name = prompt("Enter your name:")
    greeting(name);
}
user();
//
