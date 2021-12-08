var express = require('express');
var router = express.Router();
const verifyjwt = require('../util/verifyJwtToken');
const connection = require('../util/connection');

/* GET home page. */
router.get('/showData1', async function (req, res, next) {
  try {
    const verifyResult = await verifyjwt.verifyJwtAuth(req.cookies.info.code)
    const query = `SELECT * FROM Admin WHERE email= '${req.cookies.info.uname}'`;
    if (verifyResult === 'Verified Successfully') {
      connection.query(query, (error, result, fields) => {
        if (error) {
          console.log(error)
          return
        }
        res.render('welcome', { result })
      })
    }

  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
