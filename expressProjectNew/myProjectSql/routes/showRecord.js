const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const importAuthFun = require('../util/verifyAuth');
const mysql = require('mysql')
const connection = require('../util/connection')

/* GET home page. */
router.get('/showRecord', function (req, res, next) {
    try {
    importAuthFun.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
        if (result === 'Verified Successfully') {
            let pageNo;
            let limitvalue;
             if(req.query.page === undefined){
                 pageNo = 1;
                 limitvalue = 2;
                 console.log(pageNo);
                 console.log(limitvalue);
    
             }else {
                 pageNo = req.query.page;
                 limitvalue = req.query.limit;
                 console.log(limitvalue);
                 console.log(pageNo);
             }
      connection.query(`SELECT * FROM EMPLOYEE LIMIT ${(pageNo-1)*limitvalue} ,${limitvalue*1}`, function (error, results, fields) {
        if (results) {
            console.log(results.length)
            //const details = {pageNo,limitValue}
            res.render('showRecord', {records : results,pageNo,limitvalue});
            //res.send(results)
        }
        else console.log(error);
    })
}
       
    });
}catch(error){
    console.log('incorrect token!');
    res.send('<h3>login please!</h3>')
}

});

router.get('/addRecord',(req,res,next) =>{
    try {
    importAuthFun.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
        if (result === 'Verified Successfully') {
         res.render('addRecord')
        }
    }
    )}catch(error){
    console.log('incorrect token!');
    res.send('<h3>login please!</h3>')
}
    })

router.get('/updateRecord',(req,res,next) =>{
    const first = req.query.first_name;
    const emp_id = req.query.emp_id
     console.log(first,emp_id);
    // const firstUI = req.body.first_name;
    // console.log(firstUI);
    // connection.query(`UPDATE employee
    // SET first_name = ${req.body.first_name}
    // WHERE emp_id = ${emp_id}`)
    res.render('updateRecord',{first,emp_id})
})

router.get('/deleteRecord',(req,res,next) =>{
   // res.render('addRecord')
   const emp = req.query.emp_id
   console.log(emp);
   connection.query(`DELETE FROM employee WHERE emp_id=${emp}`,(error)=>{
    if(error){
        return console.log(error);
    }
     res.send('<h1>Data Deleted successfully!</h1>')
   //res.render('showRecord');
   //res.send('Data deleted!')
})
})

module.exports = router;
