var express = require('express');
var router = express.Router();
const connection = require('../util/getConnections')

/* GET home page. */
router.post('/addRecordDb', function (req, res, next) {
  const dbName = 'schoolDb';
  connection().then(async (client) => {
    const db = client.db(dbName);
    const collection = db.collection('student2');
    try {
      const insertDoc = await collection.insertOne({
        name: 'SaiDeepak2',
        rollno: 4,
        div: 'C',
        age: 25,
        language: 'net'
      })
      const findResult = await collection.find({}).toArray();
      console.log('documentd found:', findResult)
      //res.send(findResult)
      res.render('addRecordDb', { title: 'Express!', findResult });
    } catch (error) {
      res.status(500).send(error)
    }
  })


});


module.exports = router;
