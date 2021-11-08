var express = require('express');
var router = express.Router();
const connection = require('../util/connections').connection

/* GET home page. */
router.get('/', function(req, res, next) {
  const dbName = 'studentDb'
  connection().then(async (client) =>{
    const db = client.db(dbName);
    const collection = db.collection('teachers');
    const findResult = await collection.find().toArray();
    console.log('Found:'+findResult);
    return Promise.resolve(console.log('Found:'+findResult))
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
