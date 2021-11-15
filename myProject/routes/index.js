var express = require('express');
var router = express.Router();
const mongoConnection = require('../utils/connection').connectionObject;
// Import that connection object

/* GET home page. */
router.get('/',  function(req, res, next) {
  // Database Name
  const dbName = 'myProject';
  mongoConnection.then(async (client) => {
    const db = client.db(dbName);
    const collection = db.collection('foodStore');
    try {
      //const insertResult = await collection.insertMany([{ a: 1 }, { b: 2 }, { c: 3 }]);
      const findResult = await collection.find({}).toArray();
      console.log('Found documents =>', findResult);
      res.send(findResult);
    } catch(err) {
      res.status(500).send(err);
    }
    
  });
  
  // res.render('index', { title: 'Express',arr : [1,2,3,4,5], obj :{a:'Ram',b:2,c:3} });
});

module.exports = router;
