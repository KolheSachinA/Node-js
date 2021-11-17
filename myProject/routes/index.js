var express = require('express');
var router = express.Router();
const mongoConnection = require('../utils/connection').connectionObject;
// Import that connection object

/* GET home page. */
router.get('/',  function(req, res, next) {
      //  res.send(findResult);
       res.render('index',{})
   });
   

 
module.exports = router;
