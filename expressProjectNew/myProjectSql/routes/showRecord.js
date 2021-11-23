const express = require('express');
const router = express.Router();
const mysql = require('mysql')
const connection = require('../util/connection')

/* GET home page. */
router.get('/showRecord', function (req, res, next) {
    connection.query('SELECT * FROM EMPLOYEE', function (error, results, fields) {
        if (results) {
            console.log(results.length)
            res.render('showRecord', { records: results })
            //res.send(results)
        }
        else console.log(error);
        
    });

});

router.get('/addRecord',(req,res,next) =>{
    res.render('addRecord')
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
   //res.send('Data deleted!')
})
})

module.exports = router;
