function addition(x,y,callback){
    setTimeout(() => {
        console.log(`sum of two number is ${x+y}`);
        callback();
    }, 5000);
}
function display(){
    console.log("Numbers added!");
}
addition(4,10,display);