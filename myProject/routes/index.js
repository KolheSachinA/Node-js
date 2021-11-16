var express = require('express');
var router = express.Router();
const mongoConnection = require('../utils/connection').connectionObject;
// Import that connection object

/* GET home page. */
router.get('/',  function(req, res, next) {
  
   res.render('index', { title: 'Express',arr : [1,2,3,4,5], obj :{a:'Ram',b:2,c:3} });
});

module.exports = router;
