var express = require('express');
var router = express.Router();
const connection = require('../util/connections')

/* GET home page. */
router.get('/', function (req, res, next) {
  const dbName = 'studentDb'
  connection().then(async (client) => {
    const db = client.db(dbName);
    const username = 'Krisha'
    const collection = db.collection('teachers');
    const findResult = await collection.find()
    if (findResult.name = 'Krisha') {
      console.log('FOUNDRESULT:' + findResult);
    }
    res.send(findResult)
    return Promise.resolve(console.log('Found:' + findResult))
  })

});

module.exports = router;
