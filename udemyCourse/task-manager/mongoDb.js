//const { ObjectID } = require('bson')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const dbName = 'task-manager'
const id = new ObjectID()
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL,{ useNewUrlParser : true}, (error,client) =>{
    if(error){
        return console.log('Unable to connect sucessfully!');
    }
    console.log('Connected Sucessfully!');
    const db = client.db(dbName)
    db.collection('users').insertOne({
        _id :id,
        name : 'Dranken',
        age : 27

    },(error,result) =>{
        if(error){
            return console.log('Unable to insert!');
        }

        console.log(result.ops);
    })
    // db.collection('users').insertMany([
    //     {
    //         name : 'Baji',
    //         age : 24
    //     },{
    //         name : 'Mickey',
    //         age : 16
    //     }
    // ],(error,result)=>{
    //         if(error){
    //             return console.log('Unable to insert documents');
    //         }
    //         console.log(result.ops);
    // })
 })