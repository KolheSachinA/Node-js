var express = require("express");
var router = express.Router();
const connection = require("../util/connection");

router.get("/adminlogin", function (req, res, next) {
  const uname = req.query.Uname;
  const pass = req.query.Pass;
  res.clearCookie('info')
  res.render("adminlogin");
});

module.exports = router;