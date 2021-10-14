//Runtime-Error.
//1.Reference Error
function sum(){
    try {
        let x=10;
        let y=20;
        let sum = x+y;
        console.log(sum)
        sum1();
        console.log(" after error!");
    } catch (error) {
        //console.log("We are in catch Block!");
        console.log(error.name);
    }finally{
        console.log("I am in finally block!");
    }
   
}
console.log("start:");
sum();

//2.
try {
    throw 'myException'; // generates an exception
  } catch (e) {
    console.log(e); 
  }
//3.
try{
    const a = [1,2,3,4];
    console.log(a);
    console.log(b);
}catch(error){
    console.log(error.message);
}
//4.
try{
    let a ='xxx';
    let b =parseInt(a)
    console.log(b);
}catch(error){
    console.log(error.type);
}
