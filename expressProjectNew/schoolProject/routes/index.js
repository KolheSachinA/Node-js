var express = require("express");
var router = express.Router();
const connection = require("../util/connection");
const jwt = require("jsonwebtoken");
const importAuthFun = require("../util/verifyAuth");

/* GET home page. */
router.get("/", function (req, res, next) {
  const email = req.query.email;
  const pass = req.query.pass;
  //console.log(email,pass);
  res.render("index", { title: "Express" });
});

router.get("/home", (req, res, next) => {
  try {
  importAuthFun.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
    if (result === 'Verified Successfully') {
      connection.query('select * from updates',(error,result)=>{
          if(error) return console.log(error);
          console.log(result);
          res.render('home',{record:result});
        })
     // res.render('home')
    }else {
      res.send('check username and password!')
    }
  })
}catch(e){
      res.send('check username and password!')
}
});
module.exports = router;
