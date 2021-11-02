var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
    const queryString = req.query;
    //console.log(queryString);
    
     const a = parseInt(queryString.a) , b = parseInt(queryString.b);
     const sum = a+b;
     const sub = a-b;
     const mul = a*b;
     const div = a/b;
    // res.send({sum});
    res.render('add',{sum,sub,mul,div})
});


module.exports = router;
