var express = require('express');
var router = express.Router();
// Import that connection object

/* GET home page. */
router.get('/homeOne', function(req, res, next) {
  // get the data from req.body
  // write a query to insert data into mongodb
  // passing a message to the view, saying insert is successful.
  res.render('homeOne', { title: 'Express',arr : [1,2,3,4,5], obj :{a:1,b:2,c:3} });
});

module.exports = router;
