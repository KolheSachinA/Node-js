const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'project_1';

const connection = async () => {

    await client.connect();
    console.log('Connected Successfully!');
    return Promise.resolve(client)
}


module.exports = connection