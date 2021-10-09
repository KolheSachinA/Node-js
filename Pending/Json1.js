// declare a JSON string
// const me = `{ "name": "sachin", "age": 24, "mail": "@sachin@gmail.com" }`;

// // parse JSON string
// const data = JSON.parse(me);

// console.log(data.name); 
// console.log(data.age); 
// console.log(data.mail);
// console.log(data);
//return Object.
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);
//return array.
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr);