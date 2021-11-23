var express = require('express');
const connection = require('../util/connection');
var router = express.Router();
// const jwt = require('jsonwebtoken');
// const mongoConnection = require('../utils/connection').connectionObject;
// const importAuthFun = require('../utils/verifyAuth');

router.post('/update_auth', function (req, res, next) {
//    const emp_id = employee.emp_id
//    console.log(emp_id);
   const name = req.body.first_name
   const emp_id = req.body.emp_id
    console.log(name,emp_id);
    connection.query(`UPDATE employee SET first_name = '${req.body.first_name}' WHERE emp_id = ${emp_id}`,(error)=>{
        if(error){
            return console.log(error);
        }

        res.send('<h1>Data updated successfully!</h1>')
    })
      
      
    });

    
module.exports = router;
