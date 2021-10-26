const name = 'John';
console.log("Exported!");
const add = function (a,b)  {
    return a+b;
}
const sub = (a,b) =>{
        return a-b;
}
module.exports = {add,
            sub
}