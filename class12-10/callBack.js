console.log("start function:");
function sum (){
    console.log("Inside sum function");
    substraction();
    console.log(`The addition is 2+2`);
}

function substraction(){
    mult();
    console.log(`The answer is 2-2`);
    
}
function mult(){
    console.log("The multiplication is:"+2*2);
}
sum();
//2.
