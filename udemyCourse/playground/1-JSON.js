const fs = require('fs');
const book = {
    title :'Revolution 2020',
    author : 'Chetan Bhagat'
}
const bookString = JSON.stringify(book);
//fs.writeFileSync('1-JSON.json',bookString);//writing data
//reading data
const dataBuffer = fs.readFileSync('1-JSON.json')
const stringBuffer = dataBuffer.toString();//converting to string.
const objBuffeer =JSON.parse(stringBuffer);//converting to object
console.log(objBuffeer.title);//accessing properties.