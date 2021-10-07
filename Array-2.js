//return new array after result.
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const map2 = array1.map(x => x * 3);
console.log(map2);
console.log("-------------------------");
//Reverse
const array2 = ['one', 'two', 'three'];
console.log("Original:"+array2);
A=array2.reverse();
console.log("Reversed:"+A);
console.log("----------------");
//Slice(extract array).
console.log(array1.slice(2));
console.log(array1.slice(0,2));
console.log("----------------");
//Some.(atleat one passes the test)
const array = [1, 5, 3, 7, 5];

// checks whether an element is even
const even = (element) => element % 2 == 0;

console.log(array.some(even));
// expected output: true
console.log("------------------------");
//splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);


months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);

//changes!!
dadsdsd