const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'task-manager';
console.log('start-1');
const connection = async () => {
     console.log('start!');
     await client.connect();
     console.log('Connected Successfully!');
    //const db = client.db(dbName);
    //const collection = db.collection('student2');
//     //await createDocument(collection);
//     await findDocument(collection);
//    // await updateDocument(collection);
//     //await deleteDocument(collection);
     return Promise.resolve(client)
}


module.exports = connection