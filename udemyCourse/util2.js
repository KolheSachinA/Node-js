const name = 'John';
console.log("Exported!");
const addTwo = function (a,b)  {
    return a+b;
}
const subTwo = (a,b) =>{
        return a-b;
}
 exports.addTwo = addTwo
 exports.subTwo = subTwo