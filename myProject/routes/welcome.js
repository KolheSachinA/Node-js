var express = require('express');
var router = express.Router();
const mongoConnection = require('../utils/connection').connectionObject;
// Import that connection object
const jwt = require('jsonwebtoken');
const importAuthFun = require('../utils/verifyAuth');
/* GET home page. */
router.get('/welcome', function(req, res, next) {
  // Database Name
  const dbName = 'myProject';
  let clientConn;
  importAuthFun.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
    if (result === 'Verified Successfully') {
      const dbName = 'schoolDb';
      let clientConn;
      mongoConnection.then(async (client) => {
        clientConn = client;
        const db = client.db(dbName);
        const collection = db.collection('student2');
        try {
          //const insertResult = await collection.insertMany([{ a: 1, name:'Ram', city:'Bangalore'}]);
          const findResult = await collection.find({}).skip(6).limit(6).toArray();
          // console.log('Found documents =>', findResult);
          // res.send({length:findResult.length});
          res.render('welcome', { title: 'Express', findResult });
        } catch(err) {
          console.log(err);
          res.status(500).send(err);
        }
        
      });
       
    } else {
        res.status(401).send('Incorrect Token or missing token');
    }
}).catch((err) => {
    res.status(401).send('Incorrect Token or missing token');
})
});

 


module.exports = router;
