var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')

/* GET home page. */
router.put('/updateRecord', function(req, res, next) {
    const updatedRecord = req.body;
    //console.log(updatedRecord);
    const newName = (updatedRecord.newName)
    const data = fs.readFileSync(path.resolve(__dirname,'../public/javascripts/data.json'),'utf8')
    //console.log(data);   
    const parseData = JSON.parse(data)
    parseData.name = newName
    console.log(parseData);
    const stringData = JSON.stringify(parseData)
    console.log(stringData);
    try{
    fs.writeFileSync(path.resolve(__dirname,'../public/javascripts/data.json'),stringData)
    res.send('File Updaded Successfully!')
    }catch(e){
        console.log(e);
            res.status(502).send('ERROR OCCURED!')
    }
});


module.exports = router;
