var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')

/* GET home page. */
router.post('/addRecord', function(req, res, next) {
    const addRecord = req.body;
    console.log(addRecord);
    const address = (addRecord.address)
    // console.log(address);
    const data = fs.readFileSync(path.resolve(__dirname,'../public/javascripts/data.json'),'utf8')
    //console.log(data);   
    const parseData = JSON.parse(data)
    parseData.address = address
    console.log(parseData);
    const stringData = JSON.stringify(parseData)
    console.log(stringData);
    try{
    fs.writeFileSync(path.resolve(__dirname,'../public/javascripts/data.json'),stringData)
    res.send('Record Added Successfully!')
    }catch(e){
        console.log(e);
            res.status(502).send('ERROR OCCURED!')
     }
});


module.exports = router;
