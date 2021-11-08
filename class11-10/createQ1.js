const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'schoolDb';

async function main(){
    
    await client.connect();
    console.log('Connected Successfully!');
    // const db = client.db(dbName);
    // const collection = db.collection('student2');
    //await createDocument(collection);
   // await findDocument(collection);
   // await updateDocument(collection);
    //await deleteDocument(collection);
    return ""
}

async function createDocument(collection) {
    const insertResult = await collection.insertOne({name: 'vikram',
     rollno: 5,
     div: 'C',
     age :22,
     language: 'Python'});
    console.log('Inserted documents =>', insertResult);
    return 'done';
}

async function findDocument(collection) {
    const document = await collection.find().toArray();
    console.log(document)
    return 'Done!';
 }

 async function updateDocument(collection) {
    await collection.updateOne({ name: 'Ross' }, { '$set': { 'name': 'Rosy' } })
    return 'done';
 }

 async function deleteDocument(collection) {
    await collection.deleteOne({ name:'Ross'})
 }
  

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
//complete.