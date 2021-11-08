var express = require('express');
var router = express.Router();
const connection = require('../util/getConnections');

/* GET home page. */
router.get('/', function(req, res, next) {
  const dbName = 'schoolDb';
  connection().then(async (client) => {
    const db = client.db(dbName);
    const collection = db.collection('student2');
    // try{
    //   const insertDoc = await collection.insertOne({
    //     name : 'Anuradha',
    //     rollno : 5,
    //     div :'C',
    //     age : 25,
    //     language : 'net'
    //   },(error,result)=>{
    //     if(error){
    //       console.log('Unable to add document');
    //     }

    //     console.log(result);
    //   })
    const findResult = await collection.find().toArray();
    console.log('documentd found:',findResult)
    res.send(findResult)
   
  })
  //res.render('index',{});
});


module.exports = router;
