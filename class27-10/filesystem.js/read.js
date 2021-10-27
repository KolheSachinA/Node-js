const fs = require('fs')
fs.writeFile('F:\NodeJsMaster\class27-10\notes.txt','x=a+b',(error,data)=>{
    console.log(data);
})