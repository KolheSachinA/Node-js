const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'schoolDb';

async function updateDocument(collection) {
    await client.connect();
    console.log('Connected Successfully!');
    const db = client.db(dbName);
    var collection = db.collection('student2');
    await collection.updateOne({ name: 'Jessica', }, { '$set': { 'name': 'Jasmin' } })
 }