var express = require('express');
const connection = require('../util/connection');
var router = express.Router();

router.get('/reg-form',(req,res,next) =>{
  const fname = req.body.fname ; 
  const lname = req.body.lname;
  //console.log(fname,lname);
  res.clearCookie('jwtToken')
    
    res.render('reg-form');
})
router.post('/announcement',(req,res,next)=>{
  const announcement = req.body.ann ;
  const msg =req.body.msg;
  console.log(announcement,msg);
  connection.query(`insert into updates values('${announcement}','${msg}')`,(error,result)=>{
    if (error){
      return console.log('unable to insert into db');
    }else{
      res.render('home')
    }
  })
})

module.exports = router;