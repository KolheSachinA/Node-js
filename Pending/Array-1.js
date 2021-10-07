//Array.from().
//create array from given input.
console.log(Array.from('sachin'));
console.log(Array.from([1, 2, 3], x => x + 2));
//3,4,5
console.log("-------------------------");
//Includes.
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('CAt'));
// expected output: false
console.log("-----------------------");
//indexof().
const char = ['Hulk', 'Iron-man', 'raju', 'Shyam', 'Thanos'];

console.log(char.indexOf('Thanos'));
// expected output: 4

// start from index 2
console.log(char.indexOf('Hulk', 2));
// expected output: -1

//start from index 3
console.log(char.indexOf('Shyam',3));
//expected output = 3.

console.log(char.indexOf('Captain'));
// expected output: -1

console.log("---------------------");
//return key of index.
const A = ['a', 'b', 'c'];
const iterator = A.keys();

for (const key of iterator) {
    console.log(key);
  }  
// expected output: 0
// expected output: 1
// expected output: 2
console.log("--------------------------------");
//LastindexOf().
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo','Tiger'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 4
