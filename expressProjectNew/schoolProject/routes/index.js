var express = require("express");
var router = express.Router();
const connection = require("../util/connection");

/* GET home page. */
router.get("/", function (req, res, next) {
  const email = req.query.email;
  const pass = req.query.pass;
  //console.log(email,pass);
  res.render("index", { title: "Express" });
});

router.get("/record", (req, res, next) => {});
module.exports = router;
