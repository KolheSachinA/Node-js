var express = require('express');
const connection = require('../util/connection');
var router = express.Router();
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
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




router.post('/authorizeLogin', function (req, res, next) {
    const uname = req.body.Uname;
    const pass = req.body.Pass;
     connection.query(`SELECT * FROM Admin WHERE username='${uname}' `,(error,result)=>{
         if(result[0].username === uname & result[0].password === pass){
             console.log('matched');
            // res.send('<h1>Welcome!</h1>')
             console.log('Heloooooooooo');
             let tokenGen;
             const secret = 'QWER@#$^';
             //generate token
             jwt.sign({ user: 'IoneTech' },secret, function(err, token) { // step -1 creating a token
                 if (err) {
                     console.log(err);
                     res.status(500).send(err);
                     return;
                 } else {
                     console.log('Inside');
                     tokenGen = token;
                     console.log(token);
                     const tokenObj = {
                         code : token
                     }
                     res.cookie('jwtToken',tokenObj); // step -2 & 3 , creating a cookie an dloading token in cookie
                    // res.render('showRecord', { records: results });
                    res.send('login suceesfully!')
                 }
               });
         }
         else{
               res.send('<h1>invalid input and password!</h1>')
         }
     });
    }) 


module.exports = router;
