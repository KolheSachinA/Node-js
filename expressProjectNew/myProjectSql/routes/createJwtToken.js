var express = require('express');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
var router = express.Router();

/* GET users listing. */
router.get('/createJwtToken', function(req, res, next) {
    console.log('Heloooooooooo');
    let tokenGen;
    const secret = 'QWER@#$^';
    //generate token
    jwt.sign({ user: 'IoneTech' },secret, function(err, token) { // step -1 creating a token
        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        } else {
            console.log('Inside');
            tokenGen = token;
            console.log(token);
            const tokenObj = {
                code : token
            }
            res.cookie('jwtToken',tokenObj); // step -2 & 3 , creating a cookie an dloading token in cookie
            res.send('<h2>Token Created</h2>');
        }
      });
});

module.exports = router;
