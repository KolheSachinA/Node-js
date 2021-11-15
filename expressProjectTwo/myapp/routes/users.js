var express = require('express');
var router = express.Router();
const connection = require('../util/connection')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>This is user page!</h1>');
});

// post call
router.get('/createRecord' ,(req,res,next) =>{
  const dbName = 'myProject'
  connection().then(async (client)=>{
 const db = client.db(dbName)
 const collection = db.collection('foodStore')
    // const insertDocs = await collection.insertOne({
    //   fruit : 'Papaya',
    //   quantity : 3,
    //   price :20
    // })
   res.send('data added successfully!')
  })
  
})

router.post('/showRecord',(req,res,next)=>{
 const dbName = 'myProject'
 connection().then(async(client)=>{
const db = client.db(dbName)
const collection = db.collection('foodStore')
const findResult = await collection.find({}).toArray();
console.log('documentd found:', findResult)
//res.send({findResult:findResult});
res.render('showRecord',{findResult:findResult})
 })

})
module.exports = router;
