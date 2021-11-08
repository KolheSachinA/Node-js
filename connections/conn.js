const { ObjectID } = require('bson')
const mongodb = require('mongodb')
//const ObjectID = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://localhost:27017'
const dbName = 'studentDb'

MongoClient.connect(connectionURL,(error,client) =>{
        if(error){
            return console.log('Unable to connect!');
        }

        console.log('connected successfully!');
        const db = client.db(dbName)
        // db.collection('teachers').insertOne({
        //     name : 'Keshav',
        //     classAssigned:'2',
        //     classDiv :'B'
        // },(error,result)=>{
        //         if(error){
        //             return console.log('Unable to insert data!');
        //         }
        //         console.log(result)
                
        // })

        // db.collection('teachers').findOne({name : 'Keshav',classAssigned: '5',},(error,user) => {
        //         if(error){
        //             return console.log('Unable to fetch documents!');
        //         }

        //         console.log(user);
        // })
        // db.collection('teachers').find({name:'Keshav'}).toArray((error,users) =>{
        //         console.log(users);
        // })

        // db.collection('teachers').find({name:'Keshav'}).count((error,count)=>{
        //         console.log('repeated record:'+count);
        // })

        //Update Document
//         db.collection('teachers').updateOne({
//               _id:new ObjectID("61827c9e4c2311cd8d8dcddf")
//         },{
//                 // $set:{
//                 //         name :'Kamal'
//                 // }
//                 $inc :{
//                         classAssigned : 1
//                 }
        
// }).then((result)=>{
//         console.log(result.modifiedCount);
// }).catch((error)=>{
//         console.log(error);
// })
//         db.collection('teachers').updateMany({
//                 name : 'Keshav',
//                 _id : new ObjectID("61827c7633ecce60dd23db0c"),
//         },{
//                 $set :{ name:'Raj',
//                         _id:2
//         }
// }).then((result)=>{
//         console.log(result.modifiedCount);
// }).catch((error)=>{
//         console.log(error);
// })

        db.collection('teachers').deleteMany({
                name : 'Raj'
           
}).then((result)=>{
        console.log(result);
}).catch((error)=>{
        console.log(error);
})
})
