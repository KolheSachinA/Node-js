var express = require('express');
var router = express.Router();

router.get('/reg-form',(req,res,next) =>{
  const fname = req.body.fname ; 
  const lname = req.body.lname;
  //console.log(fname,lname);
    
    res.render('reg-form');
})

module.exports = router;