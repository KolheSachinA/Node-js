//Global Objects.
console.log(__dirname); 
console.log(__filename);
function Greeting(){
    console.log("Bonjour");
}
//setTimeout(Greeting,3000);
//setInterval(Greeting,3000);
let time=0;
function greeeting(){
    time = time +1;
    console.log(time+"seconds have elapsed:");

    if(time >10){
        clearInterval(timer)
    }
}
timer = setInterval(greeeting,1000);