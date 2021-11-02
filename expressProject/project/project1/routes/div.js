var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/div', function(req, res, next) {
    const a = 10 , b = 2;
    const div = a / b;
    res.send({Division:div});
});


module.exports = router;
