var express = require('express');
var router = express.Router();
const mongoConnection = require('../utils/connection').connectionObject;
// Import that connection object
const jwt = require('jsonwebtoken');
const importAuthFun = require('../utils/verifyAuth');
/* GET home page. */
router.get('/addRecord', function(req, res, next) {
  // Database Name
  importAuthFun.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
    if (result === 'Verified Successfully') {
      const dbName = 'schoolDb';
      let clientConn;
      mongoConnection.then(async (client) => {
        clientConn = client;
        const db = client.db(dbName);
        const collection = db.collection('student2');
        try {
          let pageNo;
          let limitValue;
          // console.log(req.query.page);
          if (req.query.page === undefined){
            pageNo = 1
            limitValue = 5;
          } else {
            pageNo = req.query.page;
            limitValue = req.query.limit;
          }
          
          //const insertResult = await collection.insertMany([{ a: 1, name:'Ram', city:'Bangalore'}]);
          const findResult = await collection.find({}).limit(limitValue *1).skip((pageNo-1) *limitValue).toArray();
          // console.log('Found documents =>', findResult);
          //  res.send({page,
          //           limit,data:findResult});
          const details = {
            findResult,pageNo,limitValue
          }
          res.render('addRecord', { title: 'Express', details });
        } catch(err) {
          console.log(err);
          res.status(500).send(err);
        }
        
      });
       // res.send('Token verified succesfully redirected to /testRoute page');
    } else {
        res.status(401).send('Incorrect Token or missing token');
    }
}).catch((err) => {
    res.status(401).send('Incorrect Token or missing token');
})
});

  // res.render('index', { title: 'Express',arr : [1,2,3,4,5], obj :{a:'Ram',b:2,c:3} });


module.exports = router;
