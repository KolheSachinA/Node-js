const express = require('express');
const router = express.Router();
const mysql = require('mysql')

/* GET home page. */
router.get('/showRecord', function (req, res, next) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'pass',
        database: 'company'
    });

    connection.connect();
    connection.query('SELECT * FROM EMPLOYEE', function (error, results, fields) {
        if (results) {
            console.log(results)
            res.render('showRecord', { records : results} )
            //res.send(results)
        }
        else {
            console.log(error);
        }
    });
   // connection.end();
});

module.exports = router;
