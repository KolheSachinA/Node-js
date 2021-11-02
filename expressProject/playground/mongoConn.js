//import mongoClient.
const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url)
const dbName = 'schoolDb'

//create main function
async function main(){
        await client.connect();
        console.log('connected sucessfully!');
}

main()