var express = require('express');
const connection = require('../util/connection');
var router = express.Router();

/* GET home page. */
router.post('/checkValidate', function(req, res, next) {
  const email = req.body.email;
  const pass = req.body.pass;
  console.log(email,pass);
    try {
  connection.query((`select * from studentdata where email = '${email}'`),(error,results,fields)=>{
      if(results[0].password === pass && results[0].email === email){//counter condition needs to add
        console.log(results);
        console.log(fields);
          console.log('login successful');
          //res.send('<h1> Welcome </h1>')
          //res.render('studentData',{});
          connection.query(`select * from studentdata where email = '${email}'`,(error,result)=>{
            if(error)  {
                    console.log('Unable to find results!');
            }
            res.render('studentData',{result})
        })
      }else {
          res.send('check username / password!')
          console.log(error);
      }
  })
    }catch(e){
        console.log('error!');
    }
  //res.render('index', { title: 'Express' });
});

module.exports = router;
