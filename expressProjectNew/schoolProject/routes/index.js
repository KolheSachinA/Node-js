var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const email = req.query.email;
  const pass = req.query.pass;
  //console.log(email,pass);
  res.render('index', { title: 'Express' });
});

module.exports = router;
