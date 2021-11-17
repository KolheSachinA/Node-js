var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const mongoConnection = require('../utils/connection').connectionObject;
const importAuthFun = require('../utils/verifyAuth');

router.post('/authorize', function (req, res, next) {
    mongoConnection.then(async (client) => {
        const dbName = 'myProject'
        const username = req.body.Uname
        const pass = req.body.Pass
        clientConn = client;
        const db = client.db(dbName);
        const collection = db.collection('credentials');
        const findResult = await collection.findOne({ Username: username, Password: pass })

        if (findResult === null) {
            res.send('<h1>Check username and password!</h1>')
        } else {
            res.render('welcome', { Username: username })
        }
    }).catch((error) => {
        console.log('error');
    })

})



module.exports = router;
