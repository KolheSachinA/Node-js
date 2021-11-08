var express = require('express');
var router = express.Router();
const connection = require('../util/connection').connection

/* GET home page. */
router.get('/', function(req, res, next) {
  const dbName = 'task-manager';
  connection.then(async (client) => {
    console.log('start');
    const db = client.db(dbName);
    const collection = db.collection('student2');
    const findResult = await collection.find().toArray();
    console.log('documentd found:'+findResult)
    
  })
  res.render('index', { title: 'Ione-Tech Solution!' });
});

module.exports = router;
