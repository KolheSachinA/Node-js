var express = require('express');
const connection = require('../util/connection');
var router = express.Router();
// const jwt = require('jsonwebtoken');
// const mongoConnection = require('../utils/connection').connectionObject;
// const importAuthFun = require('../utils/verifyAuth');

router.post('/authorize', function (req, res, next) {
   const Code = req.body.code;
   const name = req.body.name;
    const area = req.body.area;
    const comm = req.body.commission;
    const mobile = req.body.mobile;
    const country = req.body.country
    console.log(Code,name,area,comm,mobile,country);
    connection.query(`INSERT INTO AGENTS VALUES ('${Code}', '${name}', '${area}', '${comm}','${mobile}','${country}')`,(error)=>{
        if(error){
            return console.log(error);
        }
       res.send('<h1>Data inserted successfully!</h1>')
    });

    

})



module.exports = router;
