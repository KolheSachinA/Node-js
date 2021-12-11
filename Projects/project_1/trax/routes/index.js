var express = require('express');
var router = express.Router();
const connection = require('../util/connection');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/checkLogin', function (req, res, next) {
  const { uname, pwd } = req.body;
  console.log(uname, pwd);
  connection().then(async (client) => {
    const dbName = 'project_1';
    console.log('start');
    const db = client.db(dbName);
    const collection = db.collection('projectOne');
    const findResult = await collection.find({ username: uname }).toArray();
    if (findResult[0].password == pwd) {
      console.log('sucess!');
      res.render('welcome')
    } else {
      console.log('failed!');
      res.render('index')
    }

  });
})


router.post('/checkwelcome', (req, res, next) => {
  const { start, end, status } = req.body
  console.log(start, end, status);
  connection().then(async (client) => {
    const dbName = 'project_1';
    console.log('start');
    const db = client.db(dbName);
    const collection = db.collection('complaints');
    const findResult = await collection.find({
      startDate: start,
      status: status, 
      endDate: end
    }).toArray();
    console.log(findResult);
  })

})
module.exports = router;
