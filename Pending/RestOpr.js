function Player(a,b,...c){
        console.log(a);//seema
        console.log(b);//radha
        console.log(c);//array
        console.log(c.length);
}
Player('seema','radha')

function f(a, b) {
   // let normalArray = Array.prototype.slice.call(arguments)
    // -- or --
    // normalArray = [].slice.call(arguments)
    // -- or --
     normalArray = Array.from(arguments)
  
    // let first = normalArray.shift() 
    // let second = normalArray.shift()
    console.log(normalArray);
    
  }
  f(10,20);
  console.log("---------------");
  //Difference between rest param and arguments param.
  function A(...arg){
        console.log(arg);
  }
  A(10,20,30,40)

  function B(a){
        console.log(a);
        console.log(arguments);//not a array.callee function used to denote which function.
  }
  B(10,20,30,40,50)