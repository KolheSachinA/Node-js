// const city = ['Pune', 'Mumbai', 'Nagpur']

// //Add element to an array!
// const newLength = city.push('Aurangabad')//return new lenght of array.
// console.log(city);
// console.log(newLength);
// city.unshift('kolhapur');//add element to start of an array!
// console.log(city);

// //Remove element from an array!
// city.pop();
// console.log(city);
// const popped = city.shift();//remove first element and return remove element
// console.log(popped);
// console.log(city);

// //includes()--check whether given element is present:return true/false
// console.log(city.includes('Pune'))
// console.log(city.includes('pune'));//Strict equality
// console.log(city.includes('Delhi'));

//coding challanger!
const bill = [125,555,44]
const calcTip= function (bill){
    const tip = bill >= 50 && bill <= 350 ? bill * 0.15 : bill * 0.20
    return tip;
}
const tips = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])]
console.log(bill,tips);