var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')

/* GET home page. */
router.get('/getRecord', function(req, res, next) {
    // const getRecord = req.body;
    // console.log(addRecord);
    // const address = (addRecord.address)
    // // console.log(address);
    const data = fs.readFileSync(path.resolve(__dirname,'../public/javascripts/data.json'),'utf8')
    console.log(data);   
    const ObjectData = JSON.parse(data)
    res.render('getRecord',{ObjectData})
    
});


module.exports = router;
