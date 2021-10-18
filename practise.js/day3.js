function sayHi() {
    try{
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
    }catch(error){
            console.log(error.name);
    }
  }
  sayHi();
console.log("------");
var stg='sasa';
function sasa(){
    var name='hello';
    console.log(`Inside function ${stg}`);
    console.log(`Inside function ${name}`);
}
console.log(`Outside function ${stg}`);
//console.log(`outside function ${name}`);
sasa();
console.log("-----------------");
try{
console.log(greet);
let greet = 'hello';
}catch(error){
    console.log(error.name);
}
console.log("------------------");
var greeter = "hey hi";
    var times = 2;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead"
console.log("----");
for (var i = 0; i < 3; i++) {
    console.log(i);
    setTimeout(() => console.log(i), 1);
  }
  console.log("--------");
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  console.log("-------");
  for(var i=0;i<3;i++){
      setTimeout(() => {
          console.log(i);
      }, 1);
  }