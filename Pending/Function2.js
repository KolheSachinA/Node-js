//9.
let ps = require("prompt-sync");
let prompt = ps();
function ATM(){
    const contine = "yes";
    while(contine=="yes"){
    let amount = prompt("Enter the amount:")
    console.log("Please collect the amount:"+amount);
    let contine = prompt("Do you want to continue:(yes/no)")
    if(contine=="no"){
        console.log("Thanks you!!");
        break;
    }
    
    }
    
}

ATM();