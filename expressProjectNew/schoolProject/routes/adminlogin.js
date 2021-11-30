var express = require("express");
var router = express.Router();
const connection = require("../util/connection");

router.get("/adminlogin", function (req, res, next) {
  const email = req.query.email;
  const pass = req.query.pass;
  //console.log(email,pass);
  //res.render("", { title: "Express" });
  res.render("adminlogin");
});

module.exports = router;
