const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connURL = 'mongodb://localhost:27017'
const dbName = 'myProject'

MongoClient.connect(connURL,(error,client)=>{
    if(error){
        return console.log(error);
    }

    console.log('Connected Successfully!');
    const db = client.db(dbName)
   // const collection = db.collection('universities')

    // db.collection('universities').insertMany([
    //         {
    //           country : 'Spain',
    //           city : 'Salamanca',
    //           name : 'USAL',
    //           location : {
    //             type : 'Point',
    //             coordinates : [ -5.6722512,17, 40.9607792 ]
    //           },
    //           students : [
    //             { year : 2014, number : 24774 },
    //             { year : 2015, number : 23166 },
    //             { year : 2016, number : 21913 },
    //             { year : 2017, number : 21715 }
    //           ]
    //         },
    //         {
    //           country : 'Spain',
    //           city : 'Salamanca',
    //           name : 'UPSA',
    //           location : {
    //             type : 'Point',
    //             coordinates : [ -5.6691191,17, 40.9631732 ]
    //           },
    //           students : [
    //             { year : 2014, number : 4788 },
    //             { year : 2015, number : 4821 },
    //             { year : 2016, number : 6550 },
    //             { year : 2017, number : 6125 }
    //           ]
    //         }
            
    // ]).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // db.collection('courses').insertMany([
    //         {
    //           university : 'USAL',
    //           name : 'Computer Science',
    //           level : 'Excellent'
    //         },
    //         {
    //           university : 'USAL',
    //           name : 'Electronics',
    //           level : 'Intermediate'
    //         },
    //         {
    //           university : 'USAL',
    //           name : 'Communication',
    //           level : 'Excellent'
    //         }
    //         ]).then((result)=>{
    //                 console.log(result);
    //             }).catch((error)=>{
    //                 console.log(error);
    //             })
    db.universities.aggregate([
        {
            $match : {
                country : 'Spain',city : 'Salamanca'
            }
        }
    ]).toArray((error,result)=>{
        if(error){
            return console.log(error);
        }
        console.log(result);
    })
})

db.universitites.aggregate([
    {$group : {_id : '$name',totaldocs : {$sum : 1}
        }}])

db.universitites.aggregate([{
    $group : {_id : '$name' , totaldocs : {$sum : 1}}
},{$out : copycollection}])

db.universitites.aggregate([{
    $match :{name : 'USAL'}},
    {$unwind : '$students'},
    {$project : {_id : 0,'students.year' :1,'students.number':1}},
    {$sort :{'students.number' : -1}}])