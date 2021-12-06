var express = require("express");
var router = express.Router();
const connection = require("../util/connection");
const importAuthFun = require('../util/verifyauthAdmin');

router.get("/announcement", function (req, res, next) {
  importAuthFun.verifyJwtAuthAdmin(req.cookies.admin.code).then((result) => {
    if (result === 'Verified Successfully'){ // admin token is different.
      if(req.cookies.admin.role === 'Admin'){
        console.log(`Admin is accessing!`);
        res.render("announcement");
     }else {
        console.log('admin is not present!')
    }
  }
    else {
      console.log('error');
    }
    }).catch((e)=>{
      console.log(e);
    }) 
});

module.exports = router;
