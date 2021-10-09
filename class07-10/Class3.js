let x = 5.3333
console.log(typeof x);
console.log(parseInt(x));
x = '123.32';
console.log(parseInt(x));
x = '123.32';
console.log(parseFloat(x));
x = 's';
console.log(parseFloat(x));
x = '10.30';
console.log(parseFloat(x));

var j = parseInt('0x', '20')
console.log(j);


//copied.
function roughScale(x, base) {
    const parsed = parseInt(x, base);
    return parsed;
}

console.log(roughScale('010', 8));
console.log(roughScale('101', 2));
console.log(roughScale('100', 10));
console.log(roughScale('AAA', 16));



