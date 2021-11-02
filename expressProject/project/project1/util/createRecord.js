const main = require('./getConnections');
//onst getConn = require('./getConnections')
const main = main()
main.createDocument
async function createDocument(collection) {
    const insertResult = await collection.insertOne({name: 'seema',
     rollno: 5,
     div: 'C',
     age :22,
     language: 'Python'});
    console.log('Inserted documents =>', insertResult);
    return 'done';
}