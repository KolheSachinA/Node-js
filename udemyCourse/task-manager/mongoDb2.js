const mongo = require('mongodb')
const MongoClient = mongo.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const dbName = 'taskManager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        //return console.log('Unable to connect to database!');
        console.log(error);
    }
    console.log('Connected Sucessfully!');
        const dbOne = client.db(dbName)
     dbOne.collection('tasks').insertMany([
       {
         description : 'Clean the house',
         completed : true
         },
         {
             description:'Renew inspection',
             completed:false
         },
         {
             description:'Pot plants',
             completed:false
         }
    ],(error,result)=>{
        if(error){
            return console.log('Unbake to insert into database!');
        }
        console.log(result.ops);
    })
})