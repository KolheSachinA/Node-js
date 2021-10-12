const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'schoolDb';

async function main(){
    await client.connect();
    console.log('Connected Successfully!');
    const db = client.db(dbName);
    const collection = db.collection('student2');
    // const findResult = await collection.find({age:25}).toArray();
    // console.log('Found documents =>', findResult);
    // const insertResult = await collection.insert([{name: 'Ross',
    // rollno: 1,
    // div: 'A',
    // age :22,
    // language: 'Python'}

  
    console.log('Inserted documents =>', insertResult);
//     const filteredDocs = await collection.find({ rollno: 1 }).toArray();
// console.log('Found documents filtered by { rollno: 1 } =>', filteredDocs);
  // await updateDocument(collection);
   //await deleteDocument(collection);
    return 'done.'
}
async function updateDocument(collection) {
    await collection.updateOne({ name: 'Jessica' }, { '$set': { 'name': 'Jasmin' } })
 }
 async function deleteDocument(collection) {
    await collection.deleteOne({ name:'Jasmin'})
 }
main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
