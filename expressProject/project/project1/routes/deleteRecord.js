var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')

/* Delete record!. */
router.delete('/deleteRecord', function(req, res, next) {
    const deleteRecord = req.body;
    //console.log(updatedRecord);
    const city = deleteRecord.city
    const data = fs.readFileSync(path.resolve(__dirname,'../public/javascripts/data.json'),'utf8')
    console.log(data);   
    const stringData = data.toString
    console.log(stringData.length);
    const ObjectData = JSON.parse(data)
    console.log(ObjectData);
    //const ObjectData = JSON.parse(data)
    

    

    
});


module.exports = router;
