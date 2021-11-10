const mongodb = require('mongoDb')
const MongoClient = mongodb.MongoClient

const connURL = 'mongodb://localhost:27017'
const dbName = 'myProject'

MongoClient.connect(connURL,(error,client)=>{
    if(error){
        console.log('Unable to connect !');
    }
    console.log('Connected successfully!');
    const db = client.db(dbName)
    // db.collection('users').insertMany([
    //     {
    //     "AgentCode" : "A012",
    //     "AgentName" : "Lucida",
    //     "WorkingArea" : "San Jose",
    //     "Commission" : 0.12,
    //     "PhoneNo" : 044-52981425,
    //     "Country" : ""
    //     },
    //     {
    //         "AgentCode" : "AA005",
    //         "AgentName" : "Anderson",
    //         "WorkingArea" : "Brisban",
    //         "Commission" : 0.13,
    //         "PhoneNo" : 045-21447739,
    //         "Country" : " "
    //     },
    //     {
    //         "AgentCode" : "A001",
    //         "AgentName" : "Subbarao",
    //         "WorkingArea" : "Bangalore",
    //         "Commission" : 0.14,
    //         "PhoneNo" : 077-12346674,
    //         "Country" : "INDIA"
    //     },
    //     {
            
    //             "AgentCode" : "A002",
    //             "AgentName" : "Mukesh",
    //             "WorkingArea" : "Mumbai",
    //             "Commission" : 0.11,
    //             "Country" : "INDIA"
            
    //     }
    // ],
    // (error,result)=>{
    //     if(error){
    //         console.log('Data is not inserted into Db');
    //     }
        
    //     console.log(result.ops);
    //   })

    //Reading data
     
    // db.collection('users').find({"Country" : "INDIA","Commission":0.15}).count((error,count)=>{
    //         if(error){
    //             console.log('No documents found');
    //         }

    //         console.log(count);
    // })

    // db.collection('users').find({Country : "INDIA" ,"Commission":0.15}).toArray((error,result)=>{
    //     if(error){
    //     console.log(error);
    //     }

    //     console.log(result);
    // })

//  const updatePromise =  db.collection('users').updateOne({
//         AgentCode : "A002"
//     },{
//         $set :{
//             WorkingArea : "Pune"
//         }
//     })

//     updatePromise.then((result) =>{
//         console.log('records updated!'+result);
//     }).catch((error) =>{
//         console.log(error);
//     })

        // db.collection('users').updateOne(
        //     {WorkingArea : "Pune"},
        //     {
        //         $inc : {
        //             Commission : 0.1
        //         }
        //     }).then((result) =>{
        //             console.log(result);
        //     }).catch((error)=>{
        //             console.log(error);
        //     })

        // db.collection('users').updateMany({
        //     Country : "INDIA"
        // },{
        //     $inc :{//increment
        //         Commission : -1
        //     }
        // }).then((result) =>{
        //     console.log(result);
        // }).catch((error)=>{
        //     console.log(error);
        // })
        db.collection('users').updateMany({
           Country : "INDIA"
        },{
            $min :{
                Commission : 0.1499999
            }  
        }).then((result) =>{
            console.log(result);
        }).catch((error) =>{
            console.log(error);
        })
})

