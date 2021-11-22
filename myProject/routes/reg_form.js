var express = require('express');
var router = express.Router();
const mongoConnection = require('../utils/connection').connectionObject;

router.get('/reg_form',  function(req, res, next) {
  
     res.render('reg_form')
    })


module.exports = router;
