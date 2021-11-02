var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mul', function(req, res, next) {
    const a = 10 , b = 4;
    const mul = a - b;
    res.send({multiplication:mul});
});


module.exports = router;
