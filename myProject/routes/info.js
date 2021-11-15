var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const importAuthFun = require('../utils/verifyAuth');

/* GET users listing. */
router.get('/info', function(req, res, next) {
    const tokenFromCookie = req.cookies.jwtToken.code; // step -4 collecting token from cookie
    importAuthFun.verifyJwtAuth(tokenFromCookie).then((result) => {
        if (result === 'Verified Successfully') {
            res.send('Token verified succesfully redirected to /info page');
        } else {
            res.status(401).send('Incorrect Token or missing token');
        }
    }).catch((err) => {
        console.log(err);
        res.status(401).send('Incorrect Token or missing token');
    })
});


// Get token from cookie and verify that token
router.get('/testRoute', function(req, res, next) {
    importAuthFun.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
        if (result === 'Verified Successfully') {
            res.send('Token verified succesfully redirected to /testRoute page');
        } else {
            res.status(401).send('Incorrect Token or missing token');
        }
    }).catch((err) => {
        res.status(401).send('Incorrect Token or missing token');
    })
});

module.exports = router;
