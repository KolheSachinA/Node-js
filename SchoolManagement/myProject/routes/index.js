var express = require('express');
var router = express.Router();
const connection = require("../util/connection");

/* GET home page. */
router.get('/', function (req, res, next) {
  const email = req.query.email;
  const pass = req.query.pass;
  res.clearCookie('info')
  res.render('index', { title: 'Express' });
});

router.get("/home", (req, res, next) => {
  connection.query('select * from updates', (error, result) => {
    if (error) return console.log(error);
    console.log(result)
    res.render('home', { result });
  })

  //res.render('home')


});


module.exports = router;
