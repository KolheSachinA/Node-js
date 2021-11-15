const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connURL = 'mongodb://localhost:27017'
const client = new MongoClient(connURL)

const connection = async () =>{
    await client.connect()
    console.log('connected successfully!');
    return Promise.resolve(client)
}

module.exports = connection