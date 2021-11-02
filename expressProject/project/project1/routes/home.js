var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/home', function(req, res, next) {
    const body = req.body;
    //console.log(queryString);
    
     const a = parseInt(body.a) , b = parseInt(body.b);
     const sum = a+b;
     const sub = a-b;
     const mul = a*b;
     const div = a/b;
     //res.send
    res.render('sub',{sum,sub,mul,div})
});


module.exports = router;
