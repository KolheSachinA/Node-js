//Objects Destructuring.
const obj = {
    name : "sachin",
    State : "MH",
    branch : "Mech",
    teacher : { Math :"Ram",
                Bio : "Shyam"
    }
}
let {name:name1,State,branch,teacher} = obj;
console.log(name1);
console.log(teacher.Bio);

//Array Destructuring.
const arr = [1,2];
const [red,yellow] = arr;
console.log(red);
console.log(yellow);