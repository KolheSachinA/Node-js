var x=0;
while(x!=5){
    console.log("The value of x is : "+x);
    x++;
}
console.log("-----------");


var x=0;
do {
    
    x++;
    console.log("The value of x is : "+x);
}
while (x!=5);

//switch case.
const pwd=1234
    switch (pwd){
        case 2345:
            console.log("Wrong password!");
            break;
        case 1231:
            console.log("Wrong password!");
            break;
        case 1234:
            console.log("PASSWORD MATCHED");
            break;
        default:
            console.log("ENTER SOMETHING!");

    }
console.log("-------------------------");
//switch
    var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: 
    console.log(0);
    
  case 1: 
    console.log(1);
    break; 
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}
console.log("------------------------");

const course="node"
switch(course)
{
    case "Python":
        console.log("Python is made by");
        break;
    case "node":
        console.log("Node was buiud by Netscape!");
        break;
    case "C++":
        console.log("C ++ was made by Bjarne Stroustrup");
        break;
    
}
