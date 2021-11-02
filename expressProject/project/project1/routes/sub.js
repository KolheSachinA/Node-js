var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sub', function(req, res, next) {
    const a = 10 , b = 4;
    const sub = a - b;
    //res.send({Substraction:sub});
    res.render('sub',{sub})
});


module.exports = router;
