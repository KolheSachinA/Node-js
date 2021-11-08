const {MongoClient} = require('mongodb')
//const MongoClient = MongoDb.MongoClient
const connURL = 'mongodb://localhost:27017'
const client = new MongoClient(connURL)
//const connURL = 'mongodb://localhost:27017'
//const dbName = 'schoolDb'

// MongoClient.connect((connURL,(error,client)=>{
//     if(error){
//         return console.log('Unable to connect!');
//     }

//     console.log('Connected Successfully!');

//     const db = client.db(dbName)
// }))

const connection = async () => {
    await client.connect()
    console.log('Connected Sucessfully!');
    return Promise.resolve(client)

}

module.exports = connection
    


