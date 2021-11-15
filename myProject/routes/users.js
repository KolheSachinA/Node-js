var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  //verify token
  const secret = 'QWER@#$^';
  const tokenGen = req.headers.token;
  jwt.verify(tokenGen, secret, function(err, decoded) {
    if (err) {
      res.status(401).send('Incorrect Token or missing token');
    }
      console.log(decoded.user) // bar
      res.send(decoded.user);
  });
  
});

module.exports = router;
