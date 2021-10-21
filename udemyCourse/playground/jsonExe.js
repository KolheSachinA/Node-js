const fs=require('fs');
const fileBuff=fs.readFileSync('2-JSON.json')//reading content
const stringBuff = fileBuff.toString();//converting content to string.
const ObjBuff = JSON.parse(stringBuff);//converting string to object.
ObjBuff.name = 'sachin';
ObjBuff.age = 24;
 console.log(ObjBuff);
const StringBuff1 = JSON.stringify(ObjBuff);
fs.writeFileSync('2-JSON.json',StringBuff1);