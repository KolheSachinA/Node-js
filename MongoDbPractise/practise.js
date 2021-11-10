const mongodb = require('mongoDb')
const MongoClient = mongodb.MongoClient

const connURL = 'mongodb://localhost:27017'
const dbName = 'myProject'

MongoClient.connect(connURL, (error, client) => {
    if (error) {
        console.log('Unable to connect !');
    }
    console.log('Connected successfully!');
    const db = client.db(dbName)
    //     db.collection('sample').insertMany([
    //             { "_id" : 1, "name" : "xPhone", "price" : 799, "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
    //             { "_id" : 2, "name" : "xTablet", "price" : 899,"spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
    //             { "_id" : 3, "name" : "SmartTablet", "price" : 899, "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
    //             { "_id" : 4, "name" : "SmartPad", "price" : 699,"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
    //             { "_id" : 5, "name" : "SmartPhone", "price" : 599, "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}



    //     ],
    //     (error,result)=>{
    //         if(error){
    //             console.log('Data is not inserted into Db');
    //         }

    //         console.log(result.ops);
    // })
    // db.collection('sample').updateOne({
    //     _id : 5
    // },{
    //     $min : {
    //         price : 799
    //     }
    // }).then((result) =>{
    //     console.log(result);
    // }).catch((error) =>{
    //     console.log(error);
    // })

    // db.collection('sample').updateOne({
    //     _id : 5
    // },{
    //     $inc : {
    //         price : 1
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error) =>{
    //     console.log(error);
    // })

    // db.collection('sample').updateOne({
    //     _id : 5 
    // },{
    //     $max : {
    //         price : 500
    //     }
    // }).then((result) =>{
    //         console.log(result);
    // }).catch((error) =>{
    //         console.log(error);
    // })
    // db.collection('sample').updateOne({
    //     _id :5
    // },{
    //     $mul : {
    //      price : 1.25
    //     }
    // }).then((result) =>{
    //     console.log(result);
    // }).catch((error) =>{
    //     console.log(error.type);
    // })

    // db.collection('orders').insertMany([
    //     { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
    //     { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
    //     { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
    //     { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
    //     { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
    //     { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
    // ]).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // db.collection('orders').aggregate([
    //     {
    //         $match: { status: "urgent" }
    //     }, {
    //         $group: {
    //             _id: "$productName" ,sumQuantity: { $sum: "$quantity" }
    //         }
    //     }
    // ]
    // ).toArray((error,result)=>{
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log(result);
    // })

//     db.collection('orders').aggregate([
//         {
//             $group : {
//                 _id : "productName",
//                 $count : {
//                     $sum : "$quantity"
//                 }
//             }
//         }
//     ]).toArray((result,error) =>{
//        if(error){
//            return console.log(error);
//        }

//        console.log(result);
//     })

// })

//database sample.
db.collection('patient').insertMany(
[
    {
      "index": 0,
      "name": "Aurelia Gonzales",
      "isActive": false,
      "registered":"2015-02-11T04:22:39+0000",
      "age": 20,
      "gender": "female",
      "eyeColor": "green",
      "favoriteFruit": "banana",
      "company": {
        "title": "YURTURE",
        "email": "aureliagonzales@yurture.com",
        "phone": "+1 (940) 501-3963",
        "location": {
          "country": "USA",
          "address": "694 Hewes Street"
        }
      },
      "tags": [
        "enim",
        "id",
        "velit",
        "ad",
        "consequat"
      ]
    },
    {
      "index": 1,
      "name": "Kitty Snow",
      "isActive": false,
      "registered": "2018-01-23T04:46:15+0000",
      "age": 38,
      "gender": "female",
      "eyeColor": "blue",
      "favoriteFruit": "apple",
      "company": {
        "title": "DIGITALUS",
        "email": "kittysnow@digitalus.com",
        "phone": "+1 (949) 568-3470",
        "location": {
          "country": "Italy",
          "address": "154 Arlington Avenue"
        }
      },
      "tags": [
        "ut",
        "voluptate",
        "consequat",
        "consequat"
      ]
    },
    {
      "index": 2,
      "name": "Hays Wise",
      "isActive": false,
      "registered": "2015-02-23T10:22:15+0000",
      "age": 24,
      "gender": "male",
      "eyeColor": "green",
      "favoriteFruit": "strawberry",
      "company": {
        "title": "EXIAND",
        "email": "hayswise@exiand.com",
        "phone": "+1 (801) 583-3393",
        "location": {
          "country": "France",
          "address": "795 Borinquen Pl"
        }
      },
      "tags": [
        "amet",
        "ad",
        "elit",
        "ipsum"
      ]
    },
    {
      "index": 3,
      "name": "Karyn Rhodes",
      "isActive": true,
      "registered": "2014-03-11T03:02:33+0000",
      "age": 39,
      "gender": "female",
      "eyeColor": "green",
      "favoriteFruit": "strawberry",
      "company": {
        "title": "RODEMCO",
        "email": "karynrhodes@rodemco.com",
        "phone": "+1 (801) 505-3760",
        "location": {
          "country": "USA",
          "address": "521 Seigel Street"
        }
      },
      "tags": [
        "cillum",
        "exercitation",
        "excepteur"
      ]
    }
]).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
})
