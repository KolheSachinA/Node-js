var express = require('express');
var router = express.Router();

router.get('/logout', function (req, res, next) {
    res.clearCookie('jwtToken')
    res.render('login')
    //res.send('<h1>Successfully Logout!</h1>')
})

module.exports = router