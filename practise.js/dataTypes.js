let lastName = 'sharma'
let oldLastName = lastName ; 
lastName = 'Malpani'
console.log('lastName:',lastName);
console.log('oldLastName',oldLastName);

const jessica = {
    name : 'jessica',
    lastName : 'joester',
    family : ['Alice','Bob']
}
const marriedJessica = jessica
marriedJessica.lastName = 'Wayne'
console.log('jessica',jessica);
console.log('marriedJessica',marriedJessica);

const jessicaCopy = Object.assign({},jessica);
jessicaCopy.lastName = 'jonas';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('jessica',jessica);
console.log('jessicaCopyWithAssign',jessicaCopy);

//array will also changes in both i.e.shallow copy
console.log('jessica',jessica);
console.log('jessicaCopyWithAssign',jessicaCopy);
